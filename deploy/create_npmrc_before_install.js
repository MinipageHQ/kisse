const { writeFile } = require("fs").promises
const { resolve } = require("path")

const root = resolve(__dirname, "../")
require("@blitzjs/env").loadEnvConfig(root)

if (!process.env.GITHUB_PACKAGES_TOKEN) {
  throw new Error("process.env.GITHUB_PACKAGES_TOKEN is required")
}

const npmrcFile = `
save-exact=true
legacy-peer-deps=true

public-hoist-pattern[]=next
public-hoist-pattern[]=secure-password
public-hoist-pattern[]=*jest*
public-hoist-pattern[]=@testing-library/*
@saltanahq:registry=https://npm.pkg.github.com

//npm.pkg.github.com/:_authToken=${process.env.GITHUB_PACKAGES_TOKEN}
`

async function main() {
  await writeFile(resolve(root, ".npmrc"), npmrcFile, "utf-8")
}

main().then(() => {
  console.log("created an .npmrc file")
})
