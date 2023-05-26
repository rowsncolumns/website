/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack (config) {
    config.externals.push('canvas')
    return config
  },
  experimental: {
    outputFileTracingIgnores: ["**canvas**"]    
  }
}

module.exports = nextConfig
