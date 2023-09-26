/*
  Warnings:

  - Added the required column `nilai` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sensor" DROP CONSTRAINT "Sensor_tandonBahanId_fkey";

-- DropForeignKey
ALTER TABLE "Sensor" DROP CONSTRAINT "Sensor_tandonId_fkey";

-- AlterTable
ALTER TABLE "Sensor" ADD COLUMN     "nilai" INTEGER NOT NULL,
ALTER COLUMN "tandonId" DROP NOT NULL,
ALTER COLUMN "tandonBahanId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_tandonBahanId_fkey" FOREIGN KEY ("tandonBahanId") REFERENCES "TandonBahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
