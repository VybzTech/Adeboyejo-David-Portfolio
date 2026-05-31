import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client with environment variables safely on server-side execution
// Assert variables exist to prevent silent runtime connection errors
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Secure service role bypasses RLS policies for admin writes

if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables in .env.local');
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Admin client to bypass Row Level Security safely within server environments
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
    },
});