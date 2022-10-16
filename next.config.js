/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "skyline-app-bucket.s3.eu-west-3.amazonaws.com",
    ],
  },
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    return config;
  },
};
const intercept = require("intercept-stdout");
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}
intercept(interceptStdout);

module.exports = nextConfig;
