/*
  Warnings:

  - Added the required column `provider` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Link` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "LinkTypes" AS ENUM ('checkout', 'redirect', 'embed', 'linkList');

-- CreateEnum
CREATE TYPE "LinkProviders" AS ENUM ('notion', 'typeform');

-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "privateMetadata" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "provider" "LinkProviders" NOT NULL,
ADD COLUMN     "statsSnapshot" JSONB NOT NULL DEFAULT '{}',
DROP COLUMN "type",
ADD COLUMN     "type" "LinkTypes" NOT NULL;
