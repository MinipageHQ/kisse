-- AlterTable
ALTER TABLE "Asset" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "quantity" SET DEFAULT -1,
ALTER COLUMN "currency" SET DEFAULT E'USD';

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "stripeCustomerId" TEXT;
