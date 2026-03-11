import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    qualities: [100, 50, 25],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frzvafyfvzpfmymlpytf.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
