import type { CollectionEntry } from "astro:content";
import post from "./og-templates/post";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  if (!posts) return [];
  return posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );
};

export default getSortedPosts;
