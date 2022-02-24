/*
  Warnings:

  - The values [LINK_PROVIDER_NATIVE,LINK_PROVIDER_NOTION,LINK_PROVIDER_TYPEFORM] on the enum `LinkProvider` will be removed. If these variants are still used in the database, this will fail.
  - The values [LINK_TYPE_CHECKOUT,LINK_TYPE_REDIRECT,LINK_TYPE_LINKLIST,LINK_TYPE_EMBED] on the enum `LinkType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LinkProvider_new" AS ENUM ('native', 'notion', 'typeform');
ALTER TABLE "Link" ALTER COLUMN "provider" TYPE "LinkProvider_new" USING ("provider"::text::"LinkProvider_new");
ALTER TYPE "LinkProvider" RENAME TO "LinkProvider_old";
ALTER TYPE "LinkProvider_new" RENAME TO "LinkProvider";
DROP TYPE "LinkProvider_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "LinkType_new" AS ENUM ('checkout', 'redirect', 'linklist', 'embed');
ALTER TABLE "Link" ALTER COLUMN "type" TYPE "LinkType_new" USING ("type"::text::"LinkType_new");
ALTER TYPE "LinkType" RENAME TO "LinkType_old";
ALTER TYPE "LinkType_new" RENAME TO "LinkType";
DROP TYPE "LinkType_old";
COMMIT;
