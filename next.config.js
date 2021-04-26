const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([[withBundleAnalyzer]], {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? process.env.CDN_URL : "",
  compress: false,
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});
