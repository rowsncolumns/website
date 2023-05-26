/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack (config) {
    config.externals.push('canvas')
    return config
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/canvas',
      ],
    },
  }
}

module.exports = nextConfig
