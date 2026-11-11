"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  seedProjectsToFirestore,
} from "@/lib/projectsService";
import {
  Lock,
  GoogleLogo,
  SignOut,
  Plus,
  Trash,
  PencilSimple,
  ArrowsClockwise,
  ArrowSquareOut,
  FolderOpen,
  Check,
  X,
  Database,
  Lightning,
  Sparkle,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function AdminPage() {
  const { user, loading: authLoading, signInWithGoogle, signInWithEmail, logout } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Auth form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [submittingAuth, setSubmittingAuth] = useState(false);

  // Projects CMS state
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "completed" | "In-Progress">("all");

  // Modal / Form state for Add/Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [savingProject, setSavingProject] = useState(false);
  const [seeding, setSeeding] = useState(false);

  // Project form fields
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    title: "",
    slug: "",
    status: "completed" as "completed" | "In-Progress",
    description: "",
    fullContent: "",
    role: "Lead Engineer",
    timeline: "3 Months",
    image: "/images/Projects/ADMIN-Page.png",
    imagesStr: "",
    tagsStr: "Frontend, Full Stack",
    stackStr: "Next.js, TypeScript, Firebase, Tailwind CSS",
    github: "",
    link: "",
    isFeatured: false,
    metricsStr: "Years Experience:4+, Projects Completed:10+",
  });

  const loadProjects = async () => {
    setLoadingProjects(true);
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err: any) {
      toast.error("Failed to load projects from Firestore");
    } finally {
      setLoadingProjects(false);
    }
  };

  useEffect(() => {
    if (user) {
      loadProjects();
    }
  }, [user]);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setSubmittingAuth(true);
    try {
      await signInWithEmail(email, password);
      toast.success("Welcome back, David!");
    } catch (err: any) {
      setAuthError(err.message || "Authentication failed. Check credentials.");
      toast.error("Sign in failed");
    } finally {
      setSubmittingAuth(false);
    }
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    setSubmittingAuth(true);
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google!");
    } catch (err: any) {
      setAuthError(err.message || "Google sign-in failed.");
    } finally {
      setSubmittingAuth(false);
    }
  };

  const handleSeedData = async () => {
    if (!confirm("Seed default portfolio projects into Cloud Firestore?")) return;
    setSeeding(true);
    try {
      const result = await seedProjectsToFirestore();
      toast.success(`Firestore successfully synced with ${result.count} projects!`);
      await loadProjects();
    } catch (err: any) {
      toast.error("Seeding failed: " + err.message);
    } finally {
      setSeeding(false);
    }
  };

  const openCreateModal = () => {
    setEditingProject(null);
    const nextId = projects.reduce((max, p) => (p.id > max ? p.id : max), 0) + 1;
    setFormData({
      id: nextId,
      name: "",
      title: "",
      slug: "",
      status: "completed",
      description: "",
      fullContent: "",
      role: "Product Engineer",
      timeline: "2 Months",
      image: "/images/Projects/ADMIN-Page.png",
      imagesStr: "",
      tagsStr: "React, Next.js",
      stackStr: "Next.js, TypeScript, Tailwind CSS, Firebase",
      github: "",
      link: "",
      isFeatured: false,
      metricsStr: "Performance:99%, SEO:100%",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setEditingProject(project);
    setFormData({
      id: project.id,
      name: project.name || project.title || "",
      title: project.title || project.name || "",
      slug: project.slug || "",
      status: project.status,
      description: project.description || "",
      fullContent: project.fullContent || "",
      role: project.role || "",
      timeline: project.timeline || "",
      image: project.image || "",
      imagesStr: project.images ? project.images.join(", ") : "",
      tagsStr: project.tags ? project.tags.join(", ") : "",
      stackStr: project.stack ? project.stack.join(", ") : "",
      github: project.github || "",
      link: project.link || "",
      isFeatured: Boolean(project.isFeatured),
      metricsStr: project.metrics
        ? project.metrics.map((m) => `${m.label}:${m.value}`).join(", ")
        : "",
    });
    setIsModalOpen(true);
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProject(true);

    try {
      const parsedTags = formData.tagsStr
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const parsedStack = formData.stackStr
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const parsedImages = formData.imagesStr
        .split(",")
        .map((img) => img.trim())
        .filter(Boolean);

      const parsedMetrics = formData.metricsStr
        .split(",")
        .map((item) => {
          const parts = item.split(":");
          if (parts.length >= 2) {
            return { label: parts[0].trim(), value: parts[1].trim() };
          }
          return null;
        })
        .filter(Boolean) as { label: string; value: string }[];

      const projectPayload: Omit<Project, "docId"> = {
        id: Number(formData.id),
        name: formData.name,
        title: formData.title || formData.name,
        slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        status: formData.status,
        description: formData.description,
        fullContent: formData.fullContent,
        role: formData.role,
        timeline: formData.timeline,
        image: formData.image,
        images: parsedImages.length > 0 ? parsedImages : undefined,
        tags: parsedTags,
        stack: parsedStack,
        github: formData.github,
        link: formData.link,
        isFeatured: formData.isFeatured,
        metrics: parsedMetrics.length > 0 ? parsedMetrics : undefined,
      };

      if (editingProject && editingProject.docId) {
        await updateProject(editingProject.docId, projectPayload);
        toast.success(`Project "${projectPayload.name}" updated successfully!`);
      } else {
        await createProject(projectPayload);
        toast.success(`Project "${projectPayload.name}" created in Firestore!`);
      }

      setIsModalOpen(false);
      await loadProjects();
    } catch (err: any) {
      toast.error("Error saving project: " + err.message);
    } finally {
      setSavingProject(false);
    }
  };

  const handleDeleteProject = async (project: Project) => {
    if (!confirm(`Delete project "${project.name}"? This action cannot be undone.`)) return;

    if (!project.docId) {
      toast.error("This project is currently loaded from local backup. Seed to Firestore first to manage deletions.");
      return;
    }

    try {
      await deleteProject(project.docId);
      toast.success(`Project "${project.name}" deleted.`);
      await loadProjects();
    } catch (err: any) {
      toast.error("Failed to delete project: " + err.message);
    }
  };

  const filteredProjects = projects.filter((p) => {
    const matchesQuery =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      filterStatus === "all" ? true : p.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesQuery && matchesStatus;
  });

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-12">
        <div className="flex flex-col items-center gap-4">
          <ArrowsClockwise size={32} className="animate-spin text-primary" />
          <p className="text-text-muted text-sm">Verifying Firebase Authentication...</p>
        </div>
      </div>
    );
  }

  // Not logged in: Show Login Screen
  if (!user) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
        <div
          className={cn(
            "w-full max-w-md p-8 rounded-3xl border transition-all duration-300",
            isDark
              ? "bg-[var(--surface)] border-white/10 shadow-2xl shadow-primary/10"
              : "bg-white border-slate-200 shadow-xl"
          )}
        >
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4">
              <Lock size={32} weight="duotone" />
            </div>
            <h1 className="text-2xl font-heading font-black tracking-tight">
              Headless CMS Studio
            </h1>
            <p className="text-sm text-text-muted mt-2">
              Sign in with Firebase Authentication to manage your portfolio content and Cloud Firestore.
            </p>
          </div>

          {authError && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs leading-relaxed">
              {authError}
            </div>
          )}

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-text-muted">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="adedave77@gmail.com"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-text-muted">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={submittingAuth}
              className="w-full py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50"
            >
              {submittingAuth ? (
                <>
                  <ArrowsClockwise size={18} className="animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Sign In with Credentials"
              )}
            </button>
          </form>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <span className="relative px-3 text-xs uppercase tracking-wider bg-[var(--surface)] text-text-muted">
              Or authenticate with
            </span>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={submittingAuth}
            className="w-full py-3 px-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-sm font-semibold transition-all flex items-center justify-center gap-2"
          >
            <GoogleLogo size={20} weight="bold" className="text-red-500" />
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  // Logged In: Headless CMS Admin Dashboard
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Top Banner / User Bar */}
      <div
        className={cn(
          "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 rounded-3xl border mb-8",
          isDark
            ? "bg-[var(--surface)] border-white/10"
            : "bg-white border-slate-200 shadow-sm"
        )}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName || "Admin"} className="w-full h-full rounded-2xl object-cover" />
            ) : (
              (user.email?.[0] || "A").toUpperCase()
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-heading font-black">Headless CMS Studio</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Firebase Online
              </span>
            </div>
            <p className="text-xs text-text-muted mt-0.5">
              Logged in as <span className="font-semibold text-text-primary">{user.email || user.displayName}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <button
            onClick={handleSeedData}
            disabled={seeding}
            title="Populate Cloud Firestore with default portfolio projects"
            className="px-4 py-2.5 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold flex items-center gap-2 transition-all"
          >
            <Database size={16} />
            {seeding ? "Syncing..." : "Sync / Seed to Firestore"}
          </button>

          <button
            onClick={openCreateModal}
            className="px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-primary/20"
          >
            <Plus size={16} weight="bold" />
            Add New Project
          </button>

          <button
            onClick={() => logout()}
            className="px-3.5 py-2.5 rounded-xl border border-white/10 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400 text-text-muted text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            <SignOut size={16} />
            Logout
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div
          className={cn(
            "p-6 rounded-2xl border",
            isDark ? "bg-[var(--surface)] border-white/10" : "bg-white border-slate-200"
          )}
        >
          <div className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">
            Total Projects
          </div>
          <div className="text-3xl font-heading font-black text-primary">{projects.length}</div>
          <div className="text-xs text-text-muted mt-1">Managed via Cloud Firestore</div>
        </div>

        <div
          className={cn(
            "p-6 rounded-2xl border",
            isDark ? "bg-[var(--surface)] border-white/10" : "bg-white border-slate-200"
          )}
        >
          <div className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">
            Completed Projects
          </div>
          <div className="text-3xl font-heading font-black text-emerald-400">
            {projects.filter((p) => p.status === "completed").length}
          </div>
          <div className="text-xs text-text-muted mt-1">Live in production</div>
        </div>

        <div
          className={cn(
            "p-6 rounded-2xl border",
            isDark ? "bg-[var(--surface)] border-white/10" : "bg-white border-slate-200"
          )}
        >
          <div className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">
            In-Progress Projects
          </div>
          <div className="text-3xl font-heading font-black text-amber-400">
            {projects.filter((p) => p.status !== "completed").length}
          </div>
          <div className="text-xs text-text-muted mt-1">Actively being engineered</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by project name, tech stack, or tags..."
          className="w-full sm:w-96 px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary transition-colors"
        />

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {(["all", "completed", "In-Progress"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all",
                filterStatus === status
                  ? "bg-primary text-white"
                  : "bg-white/5 hover:bg-white/10 text-text-muted"
              )}
            >
              {status === "all" ? "All Projects" : status}
            </button>
          ))}
          <button
            onClick={loadProjects}
            title="Refresh projects"
            className="p-2 rounded-xl border border-white/10 hover:bg-white/10 text-text-muted transition-all ml-1"
          >
            <ArrowsClockwise size={16} className={loadingProjects ? "animate-spin text-primary" : ""} />
          </button>
        </div>
      </div>

      {/* Projects Table / Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.docId || project.id}
            className={cn(
              "rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 group",
              isDark
                ? "bg-[var(--surface)] border-white/10 hover:border-primary/40 shadow-sm"
                : "bg-white border-slate-200 hover:border-primary/40 shadow-md"
            )}
          >
            <div className="relative h-44 w-full bg-slate-900/50 overflow-hidden">
              <Image
                src={project.image || "/images/Projects/ADMIN-Page.png"}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span
                  className={cn(
                    "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white",
                    project.status === "completed" ? "bg-emerald-600" : "bg-amber-600"
                  )}
                >
                  {project.status === "completed" ? "Completed" : "In Progress"}
                </span>
                {project.isFeatured && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary text-white">
                    Featured
                  </span>
                )}
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/70 text-white border border-white/20">
                  ID: {project.id}
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-text-muted line-clamp-2 mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack?.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/case-studies/${project.id}`}
                    target="_blank"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-text-muted hover:text-primary transition-colors"
                    title="View case study page"
                  >
                    <ArrowSquareOut size={16} />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-text-muted hover:text-emerald-400 transition-colors"
                      title="Open Live Site"
                    >
                      <Lightning size={16} />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEditModal(project)}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <PencilSimple size={14} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project)}
                    className="p-1.5 rounded-lg hover:bg-red-500/10 text-text-muted hover:text-red-400 transition-colors"
                    title="Delete project"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Create Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div
            className={cn(
              "w-full max-w-3xl my-8 p-6 md:p-8 rounded-3xl border transition-all duration-300 max-h-[90vh] overflow-y-auto",
              isDark ? "bg-[var(--surface)] border-white/10 shadow-2xl" : "bg-white border-slate-200 shadow-2xl"
            )}
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-xl font-heading font-black">
                  {editingProject ? `Edit "${editingProject.name}"` : "Create New Project in Firestore"}
                </h2>
                <p className="text-xs text-text-muted mt-1">
                  Updates sync instantly to Cloud Firestore headless CMS.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl hover:bg-white/10 text-text-muted transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    Project ID (Numeric)
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: parseInt(e.target.value, 10) || 0 })}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    Project Name / Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value, title: e.target.value })}
                    placeholder="e.g. NextGen SaaS Platform"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background text-sm focus:outline-none focus:border-primary"
                  >
                    <option value="completed">Completed</option>
                    <option value="In-Progress">In Progress</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    Your Role
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Lead Engineer"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    Timeline
                  </label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g. 3 Months"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                  Short Teaser / Summary
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Concise overview of the project and impact..."
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                  Full Project Content (Case Study Detail)
                </label>
                <textarea
                  rows={4}
                  value={formData.fullContent}
                  onChange={(e) => setFormData({ ...formData, fullContent: e.target.value })}
                  placeholder="In-depth breakdown of system architecture, challenges, and implementation details..."
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    Primary Image URL
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/images/Projects/ADMIN-Page.png"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    Gallery Images (Comma-separated URLs)
                  </label>
                  <input
                    type="text"
                    value={formData.imagesStr}
                    onChange={(e) => setFormData({ ...formData, imagesStr: e.target.value })}
                    placeholder="/images/CS-1.jpeg, /images/CS-2.jpeg"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    Category Tags (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tagsStr}
                    onChange={(e) => setFormData({ ...formData, tagsStr: e.target.value })}
                    placeholder="Frontend, SaaS, Mobile, AI"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    Tech Stack (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.stackStr}
                    onChange={(e) => setFormData({ ...formData, stackStr: e.target.value })}
                    placeholder="React, Next.js, Firebase, Tailwind CSS"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    Live Demo Link
                  </label>
                  <input
                    type="url"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                    GitHub Repository
                  </label>
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-text-muted">
                  Metrics Key-Values (Format: label:value, label:value)
                </label>
                <input
                  type="text"
                  value={formData.metricsStr}
                  onChange={(e) => setFormData({ ...formData, metricsStr: e.target.value })}
                  placeholder="Years Experience:4+, PageSpeed:98, Downloads:500+"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="isFeatured"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  className="w-4 h-4 rounded text-primary focus:ring-primary"
                />
                <label htmlFor="isFeatured" className="text-xs font-medium cursor-pointer">
                  Feature this project on homepage Case Studies carousel
                </label>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-semibold text-text-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingProject}
                  className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                >
                  {savingProject ? (
                    <>
                      <ArrowsClockwise size={16} className="animate-spin" />
                      Saving to Firestore...
                    </>
                  ) : (
                    <>
                      <Check size={16} weight="bold" />
                      Save Project
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
