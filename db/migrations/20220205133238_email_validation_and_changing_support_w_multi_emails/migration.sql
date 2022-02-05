/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "NotificationEmail" AS ENUM ('ACCOUNT', 'UPDATES', 'PROMOTIONS');

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "role",
ADD COLUMN     "notificationEmail" "NotificationEmail" NOT NULL DEFAULT E'ACCOUNT',
ADD COLUMN     "prefersEmailId" TEXT,
ADD COLUMN     "roles" "GlobalRole"[];

-- CreateTable
CREATE TABLE "Email" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "emailSafe" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Email_email_key" ON "Email"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Email_emailSafe_key" ON "Email"("emailSafe");

-- CreateIndex
CREATE INDEX "userId" ON "Email"("userId");

-- CreateIndex
CREATE INDEX "prefersEmailId" ON "User"("prefersEmailId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_prefersEmailId_fkey" FOREIGN KEY ("prefersEmailId") REFERENCES "Email"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
