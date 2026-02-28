import { SectionArticlesBlog } from "../components/sections/blog/articles";
import { SectionBlogHero } from "../components/sections/blog/heroBlog";
import { SectionPopularBlog } from "../components/sections/blog/popular";

export default function Blog(){
    return(
        <>
          <SectionBlogHero/>
          <SectionPopularBlog/>
          <SectionArticlesBlog/>
        </>
    )
}