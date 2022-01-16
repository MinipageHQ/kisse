/*
  Warnings:

  - You are about to drop the column `spaceId` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `spaceId` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `spaceId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `spaceId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `Space` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[organizationId]` on the table `Domain` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `assetTypeId` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `Domain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Link` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `amountDue` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountPaid` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountRemaining` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lines` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moves` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentAttempted` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assetId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assetSnapshot` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assetType` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assetTypeId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cancellationReason` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cancelledAt` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `completedAt` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerAmount` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerFees` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platformAmount` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `takerAmount` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `takerFees` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `takerId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeunit` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('RESET_PASSWORD');

-- CreateEnum
CREATE TYPE "AssetStatus" AS ENUM ('DRAFT', 'ARCHIVED', 'LIVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "ExternalProfileService" AS ENUM ('TWITTER', 'INSTAGRAM', 'GITHUB', 'TIKTOK', 'MEDIUM', 'NOTION');

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_spaceId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_spaceId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_spaceId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_spaceId_fkey";

-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "spaceId",
ADD COLUMN     "assetCategoryId" INTEGER,
ADD COLUMN     "assetTypeId" INTEGER NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "organizationId" INTEGER NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "status" "AssetStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "organizationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Domain" ADD COLUMN     "organizationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "spaceId",
ADD COLUMN     "domainId" INTEGER,
ADD COLUMN     "organizationId" INTEGER NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "TokenType" NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "spaceId",
ADD COLUMN     "amountDue" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "amountPaid" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "amountRemaining" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "lines" JSONB NOT NULL,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "moves" JSONB NOT NULL,
ADD COLUMN     "organizationId" INTEGER NOT NULL,
ADD COLUMN     "payerId" TEXT NOT NULL,
ADD COLUMN     "paymentAttempted" INTEGER NOT NULL,
ADD COLUMN     "platformMetadata" JSONB;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "defaultDomainId" INTEGER,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "profileMedia" JSONB,
ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "spaceId",
ADD COLUMN     "assetId" INTEGER NOT NULL,
ADD COLUMN     "assetSnapshot" JSONB NOT NULL,
ADD COLUMN     "assetType" JSONB NOT NULL,
ADD COLUMN     "assetTypeId" TEXT NOT NULL,
ADD COLUMN     "cancellationReason" TEXT NOT NULL,
ADD COLUMN     "cancelledAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "completedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "duration" JSONB,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "organizationId" INTEGER NOT NULL,
ADD COLUMN     "ownerAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ownerFees" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ownerId" INTEGER NOT NULL,
ADD COLUMN     "platformAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "privateMetadata" JSONB,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "statusHistory" JSONB,
ADD COLUMN     "takerAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "takerFees" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "takerId" INTEGER NOT NULL,
ADD COLUMN     "timeunit" TEXT NOT NULL,
ADD COLUMN     "unitPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Space";

-- CreateTable
CREATE TABLE "AssetType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "timeBased" BOOLEAN NOT NULL,
    "infiniteStock" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "pricing" JSONB NOT NULL,
    "timing" JSONB NOT NULL,
    "unavailableWhen" JSONB NOT NULL,
    "transactionProcess" JSONB NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AssetType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetCategory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "metadata" JSONB,
    "assetCategoryId" INTEGER NOT NULL,

    CONSTRAINT "AssetCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExternalProfiles" (
    "id" SERIAL NOT NULL,
    "externalId" TEXT NOT NULL,
    "service" "ExternalProfileService" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "verificationLastCheckedAt" TIMESTAMP(3) NOT NULL,
    "verificationPassed" TEXT NOT NULL,
    "verificationEntity" TEXT NOT NULL,
    "organizationId" INTEGER NOT NULL,

    CONSTRAINT "ExternalProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Domain_organizationId_key" ON "Domain"("organizationId");

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_defaultDomainId_fkey" FOREIGN KEY ("defaultDomainId") REFERENCES "Domain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_assetCategoryId_fkey" FOREIGN KEY ("assetCategoryId") REFERENCES "AssetCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_assetTypeId_fkey" FOREIGN KEY ("assetTypeId") REFERENCES "AssetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetCategory" ADD CONSTRAINT "AssetCategory_assetCategoryId_fkey" FOREIGN KEY ("assetCategoryId") REFERENCES "AssetCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Domain" ADD CONSTRAINT "Domain_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExternalProfiles" ADD CONSTRAINT "ExternalProfiles_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
