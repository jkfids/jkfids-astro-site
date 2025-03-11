import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "John Fidel Kam",
  DESCRIPTION: "Astro Micro Academics is for academic user.",
  EMAIL: "jfidelkam@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
  SITEURL: 'https://astro-micro-academic.vercel.app' // Update here to link the RSS icon to your website rss
};

export const HIGHLIGHTAUTHOR = "John F. Kam"

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Posts",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const RESEARCH: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my publications with links to paper, repositories and live demos.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION:
    "your cv",
};

export const TAGS: Metadata = {
  TITLE: "TAGS",
  DESCRIPTION:
    "blog tag filter",
};

// export const ABOUT: Metadata = {
//   TITLE: "About",
//   DESCRIPTION:
//     "A self-intro",
// };

export const REPOSITORIES: Metadata = {
  TITLE: "Repositories",
  DESCRIPTION:
    "Repositories",
};

export const MEMES: Metadata = {
  TITLE: "Memes",
  DESCRIPTION:
    "Memes",
};
