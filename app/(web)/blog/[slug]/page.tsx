import { SectionHeroBlogDetails } from "@/app/components/sections/blog/blogDetails/heroDetails";
import { SectionTalentBlogDetails } from "@/app/components/sections/blog/blogDetails/talent";
import { getPosts } from "@/lib/supabase/http/getPost";
import { createClient } from "@/lib/supabase/server";
import { PostType } from "@/utils/types/post.type";
import { Slug } from "@/utils/types/slug.type";

export default async function BlogSlug({params}:Slug) {
    const {slug} = await params;
 

    const decoderSlug = decodeURIComponent(slug);

    

    const supabase = await createClient();

    const {data} = await supabase.from("blog01").select("*").eq("subtitle",decoderSlug).single();

    
    console.log(data);

    return(
       <>
          <SectionHeroBlogDetails/>
          <SectionTalentBlogDetails data={data}/>
       </>
    )
}