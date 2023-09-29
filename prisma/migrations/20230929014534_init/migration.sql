/*
  Warnings:

  - Added the required column `interval` to the `Resep` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resep" ADD COLUMN     "interval" INTEGER NOT NULL;
