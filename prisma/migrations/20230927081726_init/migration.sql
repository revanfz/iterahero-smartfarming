/*
  Warnings:

  - Added the required column `isOnline` to the `Tandon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Tandon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tandon" ADD COLUMN     "isOnline" BOOLEAN NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
