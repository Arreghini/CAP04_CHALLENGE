/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.musicopolix.com',
        port: '',
        pathname: '/img/cms/stores/**',
      },
      {
        protocol: 'https',
        hostname: 'excursionesnuevayork.net',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;