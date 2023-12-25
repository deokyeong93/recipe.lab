const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  redirects: async function () {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/main",
        destination: "/main/explore",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
