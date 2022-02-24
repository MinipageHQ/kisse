-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "stripeSellerId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "stripeCustomerId" TEXT;
