import {
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  where,
  getDoc,
  writeBatch
} from "firebase/firestore";
import { db } from "./firebase";
import { Project } from "./types";
import { PROJECTS as FALLBACK_PROJECTS } from "./data";

const PROJECTS_COLLECTION = "projects";

/**
 * Timeout wrapper for Firestore operations on server/SSG
 */
async function withTimeout<T>(promise: Promise<T>, ms: number = 2000): Promise<T> {
  let timeoutId: NodeJS.Timeout;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms);
  });
  return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timeoutId));
}

/**
 * Normalizes Firestore document data into a typed Project object
 */
export function formatProjectDoc(docId: string, data: Record<string, any>): Project {
  return {
    id: typeof data.id === "number" ? data.id : parseInt(data.id || "0", 10),
    docId,
    name: data.name || data.title || "Untitled Project",
    title: data.title || data.name || "Untitled Project",
    slug: data.slug || "",
    status: (data.status === "completed" ? "completed" : "In-Progress") as 'completed' | 'In-Progress',
    description: data.description || "",
    fullContent: data.fullContent || data.description || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    github: data.github || "",
    link: data.link || data.liveDemo || "",
    image: data.image || "/images/Projects/ADMIN-Page.png",
    images: Array.isArray(data.images) && data.images.length > 0 ? data.images : undefined,
    role: data.role || "Developer",
    timeline: data.timeline || "",
    isFeatured: Boolean(data.isFeatured),
    metrics: Array.isArray(data.metrics) ? data.metrics : undefined,
    stack: Array.isArray(data.stack) ? data.stack : [],
    createdAt: data.createdAt?.toMillis ? data.createdAt.toMillis() : null,
    updatedAt: data.updatedAt?.toMillis ? data.updatedAt.toMillis() : null,
  };
}

/**
 * Fetch all projects from Firestore with automatic fallback to static dataset
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const projectsRef = collection(db, PROJECTS_COLLECTION);
    const q = query(projectsRef, orderBy("id", "asc"));
    const snapshot = await withTimeout(getDocs(q), 1500);

    if (!snapshot.empty) {
      return snapshot.docs.map((docSnap) => formatProjectDoc(docSnap.id, docSnap.data()));
    }

    // Try without orderBy if index is still building or missing
    const rawSnapshot = await withTimeout(getDocs(projectsRef), 1500);
    if (!rawSnapshot.empty) {
      const items = rawSnapshot.docs.map((docSnap) => formatProjectDoc(docSnap.id, docSnap.data()));
      return items.sort((a, b) => a.id - b.id);
    }
  } catch (error) {
    // Graceful fallback to static dataset during build or if Firestore is offline
  }

  return FALLBACK_PROJECTS;
}

/**
 * Fetch a single project by numeric ID or slug or docId
 */
export async function getProjectById(id: number | string): Promise<Project | null> {
  const numericId = typeof id === "number" ? id : parseInt(id, 10);

  try {
    // 1. Try querying by numeric id
    if (!isNaN(numericId)) {
      const projectsRef = collection(db, PROJECTS_COLLECTION);
      const q = query(projectsRef, where("id", "==", numericId));
      const snapshot = await withTimeout(getDocs(q), 1500);
      if (!snapshot.empty) {
        const firstDoc = snapshot.docs[0];
        return formatProjectDoc(firstDoc.id, firstDoc.data());
      }
    }

    // 2. Try doc ID lookup if id is string
    if (typeof id === "string") {
      const docRef = doc(db, PROJECTS_COLLECTION, id);
      const docSnap = await withTimeout(getDoc(docRef), 1500);
      if (docSnap.exists()) {
        return formatProjectDoc(docSnap.id, docSnap.data());
      }
    }
  } catch (error) {
    // Graceful fallback
  }

  // Fallback to static data
  const fallback = FALLBACK_PROJECTS.find((p) => p.id === numericId);
  return fallback || null;
}

/**
 * Fetch featured projects for homepage
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getProjects();
  const featured = all.filter((p) => p.isFeatured);
  return featured.length > 0 ? featured.slice(0, 3) : all.slice(0, 3);
}

/**
 * Create a new project in Firestore
 */
export async function createProject(projectData: Omit<Project, "docId">): Promise<string> {
  const projectsRef = collection(db, PROJECTS_COLLECTION);

  // If no ID provided, compute highest current ID + 1
  let nextId = projectData.id;
  if (!nextId) {
    const current = await getProjects();
    nextId = current.reduce((max, p) => (p.id > max ? p.id : max), 0) + 1;
  }

  const payload = {
    ...projectData,
    id: nextId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const docRef = await addDoc(projectsRef, payload);
  return docRef.id;
}

/**
 * Update an existing project in Firestore
 */
export async function updateProject(docId: string, updates: Partial<Project>): Promise<void> {
  const docRef = doc(db, PROJECTS_COLLECTION, docId);
  const cleanUpdates = { ...updates };
  delete cleanUpdates.docId;

  await updateDoc(docRef, {
    ...cleanUpdates,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Delete a project from Firestore
 */
export async function deleteProject(docId: string): Promise<void> {
  const docRef = doc(db, PROJECTS_COLLECTION, docId);
  await deleteDoc(docRef);
}

/**
 * Seed Firestore with default portfolio projects (for one-click initial setup)
 */
export async function seedProjectsToFirestore(): Promise<{ count: number }> {
  const batch = writeBatch(db);
  const projectsRef = collection(db, PROJECTS_COLLECTION);

  // Check if any exist already
  const snapshot = await getDocs(projectsRef);
  if (!snapshot.empty) {
    return { count: snapshot.size };
  }

  for (const project of FALLBACK_PROJECTS) {
    const newDoc = doc(projectsRef);
    batch.set(newDoc, {
      ...project,
      isFeatured: project.id <= 3,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }

  await batch.commit();
  return { count: FALLBACK_PROJECTS.length };
}
