import { createClient } from "@supabase/supabase-js";

const URL = 'https://kvukvhykssjdscyrockn.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2dWt2aHlrc3NqZHNjeXJvY2tuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTgzNzIsImV4cCI6MTk5NjIzNDM3Mn0.BApJIvvgi2AEiI7wNb5heLATNdMi0wvRxLYAsmfnXFI';

export const supabase = createClient(URL, API_KEY);