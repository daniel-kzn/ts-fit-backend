/*
  Warnings:

  - You are about to drop the column `sessionsId` on the `Schedules` table. All the data in the column will be lost.
  - The primary key for the `Sessions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rolesId` on the `Users` table. All the data in the column will be lost.
  - Added the required column `session_id` to the `Schedules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_sessionsId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_rolesId_fkey";

-- AlterTable
ALTER TABLE "Schedules" DROP COLUMN "sessionsId",
ADD COLUMN     "session_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sessions" DROP CONSTRAINT "Sessions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Sessions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Sessions_id_seq";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "rolesId",
ADD COLUMN     "role_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
