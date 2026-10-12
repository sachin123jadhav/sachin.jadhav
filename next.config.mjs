/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    // Opt-in output folder. Lets a production build run into .next-build while a
    // dev server keeps its .next, so the two cannot collide. Defaults to .next.
    distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
