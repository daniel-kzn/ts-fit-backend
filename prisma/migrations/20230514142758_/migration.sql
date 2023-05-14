/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Roles` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Users_role_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");
