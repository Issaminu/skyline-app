/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // serverActions: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "picsum.photos",
      "loremflickr.com",
      "i.pravatar.cc",
      "images.unsplash.com",
      "randomuser.me",
      "img.clerk.com",
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/buildings",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
