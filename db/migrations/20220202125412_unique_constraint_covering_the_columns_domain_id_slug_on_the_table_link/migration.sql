/*
  Warnings:

  - You are about to drop the column `privateMetada` on the `Organization` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[domainId,slug]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Made the column `domainId` on table `Link` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_domainId_fkey";

-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "domainId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "privateMetada",
ADD COLUMN     "privateMetadata" JSONB;

-- CreateIndex
CREATE UNIQUE INDEX "Link_domainId_slug_key" ON "Link"("domainId", "slug");

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
