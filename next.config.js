/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(png|jpe?g|gif|webp)$/i,
  //     use: [
  //       {
  //         loader: "file-loader",
  //       },
  //     ],
  //   })

    // config.module.rules.push({
    //   test: /\.(png|jpg|webp)$/i,
    //   use: [
    //     {
    //       loader: "url-loader",
    //     },
    //   ],
    // })

    // console.log(config.module.rules[5].use);
  //   return config
  // },
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
  // webpack: (config, options) => {
  //   console.log(config.module.rules)

  //   return config;
  // }
};

module.exports = withImages(nextConfig);
