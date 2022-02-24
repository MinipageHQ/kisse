/*
  Warnings:

  - You are about to drop the column `assetCategoryId` on the `AssetCategory` table. All the data in the column will be lost.
  - Changed the type of `currency` on the `Asset` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currency` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currency` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'EUR', 'TRY');

-- DropForeignKey
ALTER TABLE "AssetCategory" DROP CONSTRAINT "AssetCategory_assetCategoryId_fkey";

-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "currency",
ADD COLUMN     "currency" "Currency" NOT NULL;

-- AlterTable
ALTER TABLE "AssetCategory" DROP COLUMN "assetCategoryId";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "currency",
ADD COLUMN     "currency" "Currency" NOT NULL;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "privateMetada" JSONB;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "currency",
ADD COLUMN     "currency" "Currency" NOT NULL;
