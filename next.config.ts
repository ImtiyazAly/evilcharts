import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/docs",
        permanent: true, // This results in 308 status code
      },
    ];
  },
};

export default nextConfig;
