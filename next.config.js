/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  compiler: {
    styledComponents: true
  },
  webpack: (config, options) => {
    const { dir, defaultLoaders } = options;
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
      test: /\\.+(ts|tsx)$/,
      include: [dir],
      exclude: /node_modules/,
      use: [
        defaultLoaders.babel,
        { loader: 'ts-loader', options: { transpileOnly: true } },
      ],
    });

    config.module.rules.push({
      test: /\bmapbox-gl-csp-worker.js\b/i,
      use: { loader: "worker-loader" },
    })

    return config;
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
  pageExtensions: ["tsx"]
};

module.exports = withImages(nextConfig);
