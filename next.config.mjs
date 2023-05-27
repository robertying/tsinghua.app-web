import BundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  output: "standalone",
  compress: false,
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/lab": {
      transform: "@mui/lab/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  async redirects() {
    return [
      {
        source: "/learn",
        destination: "/learnX",
        permanent: true,
      },
      {
        source: "/course",
        destination: "/courses",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
