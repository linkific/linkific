import { createClient } from '@supabase/supabase-js'

// IMPORTANT: Replace these with your actual Supabase project URL and anon key.
// It's recommended to store these in environment variables for security.
const supabaseUrl = 'https://your-project-ref.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)