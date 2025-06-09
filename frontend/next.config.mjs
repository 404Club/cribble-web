/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Next.js 14 app directory features
    serverComponentsExternalPackages: [],
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

export default nextConfig