import { createClient } from '@supabase/supabase-js'

// IMPORTANT: Replace 'your-anon-key' with your actual Supabase anon key.
// It's recommended to store these in environment variables for security.
const supabaseUrl = 'https://dzdwpfvpqvnkqcpjetuc.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
