import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"

const config: BlitzConfig = {
  middleware: [
    sessionMiddleware({
      cookiePrefix: "saltana",
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  images: {
    domains: [
      "images.unsplash.com",
      "api2-nak.transloadit.com",
      "pbs.twimg.com",
      "transloadit.com",
    ],
  },
  poweredByHeader: false,
  /* Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  */
}
module.exports = config
