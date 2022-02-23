import { SecurePassword } from "blitz"
import safeEmail from "app/auth/utils/safeEmail"
import db, { GlobalRole } from "./index"

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
    name: "DIGITAL_ASSET",
    metadata: {
      label: "Digital Asset (One-time payment)",
      description: "Sell files, access, databases, and more with a one-time payment"
    },
    privateMetadata: {
      requiredFeatures: ["ASSETS"],
      description: "Single Payment - Assets with Deliverables",
    },
    isDefault: true
  },
  {
    ...assetTypeDefaults,
    name: "DIGITAL_ASSET_SUBSCRIPTION",
    metadata: {
      label: "Digital Asset (Subscription)",
      description: "Sell files, access, databases, and more with a subscription"
    },
    privateMetadata: {
      requiredFeatures: ["ASSETS_SUBSCRIPTIONS"],
      description: "Subscription/Recurring Payment - Assets with Deliverables"
    },
  },
  {
    ...assetTypeDefaults,
    name: "SHOPIFY",
    metadata: {
      label: "Shopify Product",
      description: "Sell with Shopify on your Saltana space"
    },
    privateMetadata: {
      description: "Product - Managed with Shopify",
      requiredFeatures: ["SHOPIFY"]
    },
    isDefault: false
  },
  {
    ...assetTypeDefaults,
    name: "NFT",
    metadata: {
      label: "NFT",
      description: "Sell non-fungible tokens with multiple payment options"
    },
    privateMetadata: {
      description: "NFT - Managed with Saltana",
      requiredFeatures: ["CRYPTOCURRENCIES_NFT"]
    },
    isDefault: false
  },
  // {
  //   ...assetTypeDefaults,
  //   name: "Single Payment - Assets with Deliverables (Limited Availability)",
  //   timeBased: false,
  //   infiniteStock: true,
  // },
  // {
  //   ...assetTypeDefaults,
  //   name: "Subscription - Generic",
  //   timeBased: true,
  // },
  {
    ...assetTypeDefaults,
    name: "TIME_BASED",
    metadata: {
      label: "Time-based services",
      description: "Sell limited time access to a resource, file or even your calendar"
    },
    privateMetadata: {
      description: "Single Payment - Time Based",
      requiredFeatures: ["ASSETS_TIME_BASED"]
    },
    isDefault: false,
    timeBased: true,
    timing: {
      timeUnit: "m",
      maxDuration: { m: 360 },
      minDuration: { m: 15 },
    },
  },
  {
    ...assetTypeDefaults,
    name: "DONATIONS",
    metadata: {
      label: "Donations",
      description: "Accep donations on your Saltana space"
    },
    privateMetadata: {
      description: "Single Payment - Donation",
      requiredFeatures: ["ASSETS_DONATIONS"]
    },
    isDefault: false,
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
  },,
  {
    name: "Other",
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
  console.log("seeding 10 invite codes")
  for (let i = 0; i < 10; i++) {
    const code = "TESTCODE" + i
    const referrer = "dev"
    await db.inviteCode.upsert({
      where: { code },
      update: { code, referrer },
      create: { code, referrer },
    })
  }

  console.log("seeding asset categories")
  await db.assetCategory.createMany({
    data: [...categories],
    skipDuplicates: true,
  })
  console.log("seeding asset types")

  await db.assetType.createMany({
    data: [...assetTypes],
    skipDuplicates: true,
  })

  console.log("seeding native domains")

  await db.domain.createMany({
    data: [
      {
        domain: "saltana.dev",
        provider: "NATIVE",
      },
      {
        domain: "saltana.com",
        provider: "NATIVE",
      },
    ],
  })
  /*
  const defaultPassword = "only works in dev"
  const passwordHasher = (password = defaultPassword) => SecurePassword.hash(password.trim())

  const defaultHashedPassword = await passwordHasher()

  console.log(`default password is ${defaultPassword}`)
  const createUser = async (user: string, role: GlobalRole, extraOpts = {}) => {
    const email = `testuser${user}@saltana.dev`
    const emailSafe = safeEmail(email)
    const createdUser = await db.user.create({
      data: {
        emails: {
          create: {
            email,
            emailSafe,
          },
        },
        hashedPassword: defaultHashedPassword,
        roles: [role],
        ...extraOpts,
      },
      select: {
        emails: true,
      },
    })
    const prefersEmail = createdUser.emails[0]

    if (prefersEmail) {
      await db.user.update({
        where: { id: prefersEmail.userId },
        data: {
          prefersEmailId: prefersEmail.id,
        },
      })
    }

    console.log(`creating test user ${user} with role ${role}, email: testuser+${user}@saltana.dev`)
  }

  await Promise.all([
    // Mighty admin
    createUser("r00t", "SUPERADMIN"),
    // Creator
    createUser("batuhan", "CREATOR", {
      memberships: {
        create: {
          role: "OWNER",
          organization: {
            create: {
              name: "Batuhan Icoz",
              slug: "batuhan",
            },
          },
        },
      },
    }),
    createUser("fatih", "CREATOR", {
      memberships: {
        create: {
          role: "OWNER",
          organization: {
            create: {
              name: "Fatih Guner",
              slug: "fatih",
            },
          },
        },
      },
    }),
    // Users
    createUser("u1", "USER"),
    createUser("u2", "USER"),
    createUser("u3", "USER"),
    createUser("u4", "USER"),
    createUser("u5", "USER"),
  ])
  */
}

export default seed
