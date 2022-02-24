/*
  Warnings:

  - A unique constraint covering the columns `[clerkEmailId]` on the table `Email` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Email" ADD COLUMN     "clerkEmailId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Email_clerkEmailId_key" ON "Email"("clerkEmailId");
