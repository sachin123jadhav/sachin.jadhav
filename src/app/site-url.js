/**
 * Public address of the site, used for absolute URLs in metadata, the sitemap
 * and robots.txt. Override with NEXT_PUBLIC_SITE_URL when deploying elsewhere.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://sachin-jadhav.vercel.app"
).replace(/\/$/, "");

/**
 * Open Graph fields every page shares. Next replaces a parent's openGraph
 * object instead of merging it, and a page that sets openGraph also loses the
 * image from src/app/opengraph-image.png, so the image is listed here too.
 */
export const OG_BASE = {
  type: "website",
  locale: "en_IN",
  siteName: "Sachin Jadhav",
  images: [
    {
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "Sachin Jadhav — Senior UI/UX Designer & Frontend Developer",
    },
  ],
};

/** The site's real pages, in navigation order. */
export const PAGES = ["/", "/about", "/experience", "/portfolio", "/skills", "/contact"];
