
const SUPABASE_URL = "https://jdzdtpqbezvcptxpozoz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_K_UdAFf0WNIRvm04w5bYsA_QndymiQk";

const sennizhalDB = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log("Sennizhal Supabase client initialized");
window.sennizhalDB = sennizhalDB;
