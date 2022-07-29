/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
      },
    })

    return config
  }
})

module.exports = nextConfig
