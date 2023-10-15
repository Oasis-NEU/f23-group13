import supabase from "./supabase.js";

export default function Feed(){
    const query = supabase.from('test').select(`id, content, created_at`)

    return <p>Hello</p>


}