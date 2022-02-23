-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clerkDataSnapshot" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "clerkId" TEXT;
