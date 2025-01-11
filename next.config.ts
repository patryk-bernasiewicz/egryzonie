import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntlPlugin = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntlPlugin(nextConfig);
