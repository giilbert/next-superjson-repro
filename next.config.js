/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
};
