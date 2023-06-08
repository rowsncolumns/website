/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack (config) {
    config.externals.push('canvas')
    return config
  },
  experimental: {
    outputFileTracingIgnores: ["**canvas**"],
    esmExternals: 'loose'
  },
  reactStrictMode: true,
  // transpilePackages: ['react-syntax-highlighter']
}

module.exports = nextConfig
