/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};

module.exports = withImages(nextConfig);
