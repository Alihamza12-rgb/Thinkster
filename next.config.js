/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,   // ✅ disable Next.js image optimization for static export
  },
}

module.exports = nextConfig
