-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "hash_password" DROP NOT NULL,
ALTER COLUMN "subscribed" DROP NOT NULL,
ALTER COLUMN "subscribed_at" DROP NOT NULL;
