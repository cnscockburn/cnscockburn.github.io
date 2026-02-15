import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../config";

export async function GET(context: any) {
    const posts = await getCollection("blog", ({ data }) => {
        return data.draft !== true;
    });

    const sortedPosts = posts.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );

    return rss({
        title: `${siteConfig.name} — Blog`,
        description:
            siteConfig.description ||
            "Thoughts on AI, innovation, engineering, and technology.",
        site: context.site,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.id}/`,
        })),
    });
}
