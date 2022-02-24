/*
  Warnings:

  - A unique constraint covering the columns `[domain]` on the table `Domain` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "DomainProvider" AS ENUM ('NATIVE', 'VERCEL');

-- DropForeignKey
ALTER TABLE "Domain" DROP CONSTRAINT "Domain_organizationId_fkey";

-- DropIndex
DROP INDEX "Domain_organizationId_key";

-- AlterTable
ALTER TABLE "Domain" ADD COLUMN     "provider" "DomainProvider" NOT NULL DEFAULT E'NATIVE',
ALTER COLUMN "organizationId" DROP NOT NULL,
ALTER COLUMN "vercelId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Domain_domain_key" ON "Domain"("domain");

-- AddForeignKey
ALTER TABLE "Domain" ADD CONSTRAINT "Domain_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
