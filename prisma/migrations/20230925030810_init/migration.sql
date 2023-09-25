/*
  Warnings:

  - You are about to drop the column `peracikanId` on the `Penjadwalan` table. All the data in the column will be lost.
  - You are about to drop the `Peracikan` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[waktu]` on the table `Penjadwalan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `resepId` to the `Penjadwalan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Penjadwalan" DROP CONSTRAINT "Penjadwalan_peracikanId_fkey";

-- DropForeignKey
ALTER TABLE "Peracikan" DROP CONSTRAINT "Peracikan_greenhouseId_fkey";

-- AlterTable
ALTER TABLE "Penjadwalan" DROP COLUMN "peracikanId",
ADD COLUMN     "resepId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Peracikan";

-- CreateTable
CREATE TABLE "Resep" (
    "id" SERIAL NOT NULL,
    "ppm" INTEGER NOT NULL,
    "ph" DOUBLE PRECISION NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Resep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Penjadwalan_waktu_key" ON "Penjadwalan"("waktu");

-- AddForeignKey
ALTER TABLE "Penjadwalan" ADD CONSTRAINT "Penjadwalan_resepId_fkey" FOREIGN KEY ("resepId") REFERENCES "Resep"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
