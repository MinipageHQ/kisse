/*
  Warnings:

  - Added the required column `domain` to the `Domain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vercelId` to the `Domain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Domain" ADD COLUMN     "domain" TEXT NOT NULL,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "vercelDataSnapshot" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "vercelId" TEXT NOT NULL;
