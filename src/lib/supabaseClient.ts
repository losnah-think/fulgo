import { createClient } from '@supabase/supabase-js'

const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set')

export const supabaseAdmin = createClient(url, key, {
  auth: { persistSession: false },
  global: { headers: { 'x-application': 'react-oms-wireframe' } }
})

export default supabaseAdmin
