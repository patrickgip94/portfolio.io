/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['skillicons.dev']
  }
}

module.exports = nextConfig
