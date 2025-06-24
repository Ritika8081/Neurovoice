/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  experimental: {
    devOverlays: false,
  },
  images: {
    domains: ['media.istockphoto.com'],
  },
}

module.exports = nextConfig