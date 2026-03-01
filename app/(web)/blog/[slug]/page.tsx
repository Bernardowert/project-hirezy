import { Slug } from "@/utils/types/slug.type";

export default async function BlogSlug({params}:Slug) {
    const {slug} = await params;
    return <h1>Blog Slug - {slug}</h1>
}