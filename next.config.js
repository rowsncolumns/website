/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY
  },
  reactStrictMode: true,
  // transpilePackages: ['react-syntax-highlighter']
}

module.exports = nextConfig
