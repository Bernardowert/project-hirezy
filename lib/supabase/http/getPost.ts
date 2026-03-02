import { createClient } from "../server";

export async function getPosts<T>(post:string): Promise<T[]> {
     const supabase = await createClient();

     const { data } = await supabase.from(post).select("*");

     return data ?? [];
}