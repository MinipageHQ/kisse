/*
  Warnings:

  - Changed the type of `provider` on the `Link` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `Link` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "LinkType" AS ENUM ('checkout', 'redirect', 'embed', 'linkList');

-- CreateEnum
CREATE TYPE "LinkProvider" AS ENUM ('notion', 'typeform');

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "provider",
ADD COLUMN     "provider" "LinkProvider" NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "LinkType" NOT NULL;

-- DropEnum
DROP TYPE "LinkProviders";

-- DropEnum
DROP TYPE "LinkTypes";
