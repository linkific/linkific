import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dzdwpfvpqvnkqcpjetuc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6ZHdwZnZwcXZua3FjcGpldHVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NDA4OTIsImV4cCI6MjA3NzIxNjg5Mn0.WxZOLaLpg11dyrGAP5_wPxxR95C94h-Lk5RF8SO7mZQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
