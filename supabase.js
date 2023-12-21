import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://mekfvrasvsqxpvlcnjfz.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1la2Z2cmFzdnNxeHB2bGNuamZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwNDA4NjAsImV4cCI6MjAxODYxNjg2MH0.psZz4lekv6uXAa8QLm1Db4usAV3sWjNPREYzUTEgqHA";


export const supabase = createClient(supabaseUrl,supabaseAnonKey)