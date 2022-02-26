import { enhancePrisma } from "blitz"
import { PrismaClient } from "@saltanahq/database"

const EnhancedPrisma = enhancePrisma(PrismaClient)

export * from "@prisma/client"
export default new EnhancedPrisma()
