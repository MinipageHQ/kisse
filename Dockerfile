# base node image
FROM node:16-bullseye-slim as base
# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

ARG GITHUB_PACKAGES_TOKEN
RUN echo //npm.pkg.github.com/:_authToken=$GITHUB_PACKAGES_TOKEN >> ~/.npmrc
RUN echo @saltanahq:registry=https://npm.pkg.github.com/ >> ~/.npmrc

# Install all node_modules, including dev dependencies
FROM base as deps

RUN mkdir /app
WORKDIR /app

ADD package.json yarn.lock ./
RUN yarn install --production=false

# Setup production node_modules
FROM base as production-deps

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json yarn.lock ./
RUN npm install --production

# Build the app
FROM base as build

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

# If we're using Prisma, uncomment to cache the prisma schema
RUN npx prisma generate

ADD . .
RUN yarn run build

# Finally, build the production image with minimal footprint
FROM base

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

COPY --from=build /app/.next /app/.next
COPY --from=build /app/.blitz /app/.blitz

ADD . .

CMD ["yarn", "run", "start"]
