/**
 * Keeps the leftover Upwind template demo pages and the unused auth screens out
 * of search results while they are still reachable by URL. Remove an entry here
 * if that page is ever turned into real content.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/index-two",
          "/index-three",
          "/index-four",
          "/index-five",
          "/index-six",
          "/index-seven",
          "/index-eight",
          "/index-nine",
          "/blog-detail",
          "/portfolio-detail",
          "/login",
          "/signup",
          "/reset-password",
        ],
      },
    ],
  };
}
