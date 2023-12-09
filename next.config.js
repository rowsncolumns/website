/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack (config) {
    config.externals.push('canvas')
    return config
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
    outputFileTracingExcludes: {
      '*': ['node_modules/canvas'],
    },
    // outputFileTracingIgnores: ["**canvas**"],
    esmExternals: 'loose'
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY
  },
  reactStrictMode: true,
  // transpilePackages: ['react-syntax-highlighter']
}

module.exports = nextConfig
