/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Greenhouse" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Greenhouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peracikan" (
    "id" SERIAL NOT NULL,
    "ppm" INTEGER NOT NULL,
    "ph" DOUBLE PRECISION NOT NULL,
    "nama" TEXT NOT NULL,
    "greenhouseId" INTEGER NOT NULL,

    CONSTRAINT "Peracikan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penjadwalan" (
    "id" SERIAL NOT NULL,
    "waktu" TEXT NOT NULL,
    "peracikanId" INTEGER NOT NULL,
    "tandonId" INTEGER NOT NULL,

    CONSTRAINT "Penjadwalan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sensor" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "persamaan" TEXT NOT NULL,
    "merek" TEXT NOT NULL,
    "satuan" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "tandonId" INTEGER NOT NULL,
    "tandonBahanId" INTEGER NOT NULL,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Selenoid" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "merek" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "tandonId" INTEGER NOT NULL,
    "greenhouseId" INTEGER NOT NULL,

    CONSTRAINT "Selenoid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TandonBahan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "tandonId" INTEGER NOT NULL,

    CONSTRAINT "TandonBahan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tandon" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Tandon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GreenhouseToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GreenhouseToUser_AB_unique" ON "_GreenhouseToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GreenhouseToUser_B_index" ON "_GreenhouseToUser"("B");

-- AddForeignKey
ALTER TABLE "Peracikan" ADD CONSTRAINT "Peracikan_greenhouseId_fkey" FOREIGN KEY ("greenhouseId") REFERENCES "Greenhouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penjadwalan" ADD CONSTRAINT "Penjadwalan_peracikanId_fkey" FOREIGN KEY ("peracikanId") REFERENCES "Peracikan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penjadwalan" ADD CONSTRAINT "Penjadwalan_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_tandonBahanId_fkey" FOREIGN KEY ("tandonBahanId") REFERENCES "TandonBahan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Selenoid" ADD CONSTRAINT "Selenoid_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Selenoid" ADD CONSTRAINT "Selenoid_greenhouseId_fkey" FOREIGN KEY ("greenhouseId") REFERENCES "Greenhouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TandonBahan" ADD CONSTRAINT "TandonBahan_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tandon" ADD CONSTRAINT "Tandon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GreenhouseToUser" ADD CONSTRAINT "_GreenhouseToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Greenhouse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GreenhouseToUser" ADD CONSTRAINT "_GreenhouseToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
