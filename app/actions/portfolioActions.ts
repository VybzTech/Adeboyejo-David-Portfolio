"use server";

import { supabase } from "@/lib/supabase";

interface ContactInput {
    name: string;
    email: string;
    subject: string;
    message: string;
}

/**
 * Handles saving validated contact form info directly to Supabase tables.
 */
export async function submitContactForm(data: ContactInput) {
    try {
        const { error } = await supabase
            .from("ContactInquiry")
            .insert([
                {
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                },
            ]);

        if (error) throw error;
        return { success: true };
    } catch (err: any) {
        console.error("Database operation failed for ContactInquiry:", err.message);
        return { success: false, error: err.message || "Failed to persist submission." };
    }
}

/**
 * Logs user interaction with your social profiles or buttons into telemetry table.
 */
export async function trackInteraction(platform: string, actionType: string = "click_social_footer") {
    try {
        const { error } = await supabase
            .from("InteractionLog")
            .insert([{ platform, actionType }]);

        if (error) throw error;
        return { success: true };
    } catch (err: any) {
        // Non-blocking log to avoid disrupting user navigation if tracking experiences downtime
        console.error(`Telemetry failed for platform ${platform}:`, err.message);
        return { success: false };
    }
}