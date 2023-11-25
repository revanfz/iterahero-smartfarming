/*
  Warnings:

  - You are about to drop the column `nama` on the `Greenhouse` table. All the data in the column will be lost.
  - You are about to drop the column `interval` on the `Resep` table. All the data in the column will be lost.
  - You are about to drop the column `merek` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `nilai` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `persamaan` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `satuan` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the `Selenoid` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Greenhouse` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `Greenhouse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Greenhouse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Greenhouse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Penjadwalan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durasi` to the `Penjadwalan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `greenhouseId` to the `Penjadwalan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume` to the `Resep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `microcontrollerId` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_measurement` to the `Sensor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Tandon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ppm` to the `Tandon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rasioA` to the `Tandon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rasioAir` to the `Tandon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rasioB` to the `Tandon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Selenoid" DROP CONSTRAINT "Selenoid_greenhouseId_fkey";

-- DropForeignKey
ALTER TABLE "Selenoid" DROP CONSTRAINT "Selenoid_tandonId_fkey";

-- AlterTable
ALTER TABLE "Greenhouse" DROP COLUMN "nama",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Penjadwalan" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "durasi" INTEGER NOT NULL,
ADD COLUMN     "greenhouseId" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Resep" DROP COLUMN "interval",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "volume" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "merek",
DROP COLUMN "nama",
DROP COLUMN "nilai",
DROP COLUMN "persamaan",
DROP COLUMN "satuan",
ADD COLUMN     "GPIO" INTEGER,
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "calibration" TEXT,
ADD COLUMN     "channel" INTEGER,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "greenhouseId" INTEGER,
ADD COLUMN     "microcontrollerId" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "range_max" INTEGER,
ADD COLUMN     "range_min" INTEGER,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "unit_measurement" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Tandon" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "ppm" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rasioA" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rasioAir" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rasioB" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ALTER COLUMN "status" SET DEFAULT 'Kosong';

-- AlterTable
ALTER TABLE "TandonBahan" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- DropTable
DROP TABLE "Selenoid";

-- CreateTable
CREATE TABLE "Microcontroller" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Microcontroller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TandonPenyimpanan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "distributable" BOOLEAN NOT NULL,
    "tandonId" INTEGER NOT NULL,

    CONSTRAINT "TandonPenyimpanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Icon" (
    "id" SERIAL NOT NULL,
    "logo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Icon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aktuator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "merek" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "GPIO" INTEGER NOT NULL,
    "microcontrollerId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "tandonId" INTEGER,
    "greenhouseId" INTEGER,
    "tandonPenyimpananId" INTEGER,
    "tandonBahanId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Aktuator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Microcontroller_name_key" ON "Microcontroller"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TandonPenyimpanan_nama_key" ON "TandonPenyimpanan"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Icon_name_key" ON "Icon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Greenhouse_name_key" ON "Greenhouse"("name");

-- AddForeignKey
ALTER TABLE "TandonPenyimpanan" ADD CONSTRAINT "TandonPenyimpanan_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penjadwalan" ADD CONSTRAINT "Penjadwalan_greenhouseId_fkey" FOREIGN KEY ("greenhouseId") REFERENCES "Greenhouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penjadwalan" ADD CONSTRAINT "Penjadwalan_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_type_fkey" FOREIGN KEY ("type") REFERENCES "Icon"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_microcontrollerId_fkey" FOREIGN KEY ("microcontrollerId") REFERENCES "Microcontroller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_greenhouseId_fkey" FOREIGN KEY ("greenhouseId") REFERENCES "Greenhouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_microcontrollerId_fkey" FOREIGN KEY ("microcontrollerId") REFERENCES "Microcontroller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_type_fkey" FOREIGN KEY ("type") REFERENCES "Icon"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_greenhouseId_fkey" FOREIGN KEY ("greenhouseId") REFERENCES "Greenhouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_tandonPenyimpananId_fkey" FOREIGN KEY ("tandonPenyimpananId") REFERENCES "TandonPenyimpanan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_tandonBahanId_fkey" FOREIGN KEY ("tandonBahanId") REFERENCES "TandonBahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
