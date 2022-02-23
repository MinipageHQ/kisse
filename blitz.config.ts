import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"

if (!process.env.NEXT_PUBLIC_PLAFORM_DOMAINS) {
  throw new Error("NEXT_PUBLIC_PLAFORM_DOMAINS is required")
}
const domains = process.env.NEXT_PUBLIC_PLAFORM_DOMAINS.split(',')

const config: BlitzConfig = {
  middleware: [
    sessionMiddleware({
      cookiePrefix: "saltana",
      isAuthorized: simpleRolesIsAuthorized,
    }),
    async (req, res, next) => {
      res.blitzCtx.clerkSessionToken = req.cookies.__session

      if (!res.blitzCtx.clerkSessionToken && res.blitzCtx.session.userId) {
        await res.blitzCtx.session.$revoke()
      }

      return next()
    },
  ],
  images: {
    domains: [
      "images.unsplash.com",
      "api2-nak.transloadit.com",
      "pbs.twimg.com",
      "transloadit.com",
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before pages/public files which allows overriding
        // page files
        {
          source: "/robots.txt",
          destination: "/api/robots.txt",
          // has: [{ type: "query", key: "overrideMe" }],
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: "/non-existent",
          destination: "/somewhere-else",
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/:path*",
          destination: `https://my-old-site.com/:path*`,
        },
      ],
    }
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "example.com",
          },
        ],
        destination: "/another-page",
      },
    ]
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
