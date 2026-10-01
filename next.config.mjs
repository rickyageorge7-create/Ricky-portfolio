/** @type {import('next').NextConfig} */
const githubPagesPath = "/ricky-portfolio";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProduction ? githubPagesPath : "",
  assetPrefix: isProduction ? `${githubPagesPath}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
