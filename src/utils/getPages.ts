import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export default async function getPages() {
  const pages = await getCollection("pages");
  return pages.filter(page => !page.data.draft);
}

export async function getPageBySlug(
  slug: string
): Promise<CollectionEntry<"pages"> | undefined> {
  const pages = await getCollection("pages");
  return pages.find(page => page.slug === slug && !page.data.draft);
}
