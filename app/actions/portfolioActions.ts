"use client";

/**
 * portfolioActions.ts
 *
 * Client-safe Firebase/Firestore-based replacements for the old Supabase server actions.
 * These run entirely in the browser — no server functions required (keeps us on Firebase Spark plan).
 */

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Saves a validated contact form submission to the Firestore `contact_inquiries` collection.
 */
export async function submitContactForm(data: ContactInput): Promise<{ success: boolean; error?: string }> {
  try {
    await addDoc(collection(db, "contact_inquiries"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to persist submission.";
    console.error("Firestore contact submission failed:", message);
    return { success: false, error: message };
  }
}

/**
 * Logs a user interaction event to the Firestore `interaction_log` collection.
 * Non-blocking — failures are swallowed to avoid disrupting navigation.
 */
export async function trackInteraction(
  platform: string,
  actionType: string = "click_social_footer"
): Promise<{ success: boolean }> {
  try {
    await addDoc(collection(db, "interaction_log"), {
      platform,
      actionType,
      createdAt: serverTimestamp(),
    });
    return { success: true };
  } catch (err: unknown) {
    console.error(`Telemetry failed for platform ${platform}:`, err instanceof Error ? err.message : err);
    return { success: false };
  }
}
