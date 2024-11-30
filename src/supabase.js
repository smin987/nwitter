
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qgvcirlupvelmjkaysxg.supabase.co'
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndmNpcmx1cHZlbG1qa2F5c3hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3OTE0OTksImV4cCI6MjA0NjM2NzQ5OX0.yfhLU20Y_dLPoDpelFLLrPv2MMV1A2ahZb - vuu4IUU0
const supabase = createClient(supabaseUrl, supabaseKey)

export default function uploadFile(file) {
    supabase.storage.from('images').upload(file.name, file)
}