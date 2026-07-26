import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/ftc", destination: "/", permanent: true },
      { source: "/ftc/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
