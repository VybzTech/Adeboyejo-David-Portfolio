"use server";

import { supabaseAdmin } from "@/lib/supabase";

/**
 * Increments an interaction event count inside Supabase safely from the server.
 * @param featureName Unique key identifier for the tracking target (e.g., "github_click")
 */
export async function incrementClick(featureName: string) {
  if (!featureName || typeof featureName !== 'string') {
    return { success: false, error: "Invalid feature identification token provided." };
  }

  try {
    // Calls our atomic database RPC function to accurately increase click calculations
    const { error } = await supabaseAdmin.rpc('increment_analytics_counter', {
      target_feature: featureName
    });

    if (error) {
      console.error(`Supabase RPC Error for ${featureName}:`, error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Failed to execute background interaction increment tracking:", err);
    return { success: false, error: "Internal server execution failure." };
  }
}