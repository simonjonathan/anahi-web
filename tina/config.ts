import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_CONTENT_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        defaultItem: () => {
          return {
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Publish time",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author (Default = site author)",
          },
          {
            type: "string",
            name: "postSlug",
            label: "Slug for the post. (Default = title.slugify)",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Diplay Post in featured section",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Mark this post unpublished",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags for this post (default = others)",
            list: true
          },
          {
            type: "image",
            name: "ogImage",
            label: "OG image of the post. Useful for social media sharing and SEO. default = SITE.ogImage or generated OG image",
          },
          {
            type: "string",
            name: "canonicalURL",
            label: "Canonical URL (absolute), in case the article already exists on other source.",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
