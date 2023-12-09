/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack (config) {
    config.externals.push('canvas')
    return config
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY
  },
  reactStrictMode: true,
  // transpilePackages: ['react-syntax-highlighter']
}

module.exports = nextConfig
