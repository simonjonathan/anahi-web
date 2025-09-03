import { getCollection } from "astro:content";

export async function getNavigationPages() {
  const pages = await getCollection("pages");
  return pages
    .filter(page => !page.data.draft)
    .map(page => ({
      title: page.data.title,
      slug: page.slug,
      href: `/${page.slug}`,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}
