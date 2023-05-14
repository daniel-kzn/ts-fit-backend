/*
  Warnings:

  - A unique constraint covering the columns `[role_id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_role_id_key" ON "Users"("role_id");
