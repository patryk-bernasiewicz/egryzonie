import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntlPlugin = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: { and: [/\.(js|ts)x?$/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              exportType: "named",
            },
          },
        ],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default withNextIntlPlugin(nextConfig);
