/*
  Warnings:

  - Added the required column `isActive` to the `Penjadwalan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Penjadwalan" ADD COLUMN     "isActive" BOOLEAN NOT NULL;
