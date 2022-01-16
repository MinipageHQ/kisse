import db from "./index"

const assetTypeDefaults = {
  timeBased: false,
  infiniteStock: true,

  pricing: {
    ownerFeesPercent: 10,
    takerFeesPercent: 0,
  },
  active: true,
}

const assetTypes = [
  {
    ...assetTypeDefaults,
    name: "Single Payment - Assets with Deliverables",
  },
  {
    ...assetTypeDefaults,
    name: "Single Payment - Assets with Deliverables (Limited Availability)",
    timeBased: false,
    infiniteStock: true,
  },
  {
    ...assetTypeDefaults,
    name: "Subscription - Generic",
    timeBased: true,
  },
  {
    ...assetTypeDefaults,
    name: "Single Payment - Time-based Services",
    timeBased: true,
    timing: {
      timeUnit: "m",
      maxDuration: { m: 360 },
      minDuration: { m: 15 },
    },
  },
]

const categories = [
  {
    name: "Online Education",
  },
  {
    name: "E-book",
  },
  {
    name: "Digital Artwork",
  },
  {
    name: "Dataset",
  },
]

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  for (let i = 0; i < 5; i++) {
    await db.inviteCode.create({ data: { code: "TESTCODE" + i, referrer: "dev" } })
  }
  await db.assetCategory.createMany({
    data: [...categories],
    skipDuplicates: true,
  })

  await db.assetType.createMany({
    data: [...assetTypes],
    skipDuplicates: true,
  })
}

export default seed
