-- AlterTable
ALTER TABLE "InviteCode" ADD COLUMN     "usedAt" TIMESTAMP(3),
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "InviteCode" ADD CONSTRAINT "InviteCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
