/*
  Warnings:

  - Changed the type of `waktu` on the `Penjadwalan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Penjadwalan" DROP COLUMN "waktu",
ADD COLUMN     "waktu" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Penjadwalan_waktu_key" ON "Penjadwalan"("waktu");
