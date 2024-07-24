-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Microcontroller" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "tandonId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Microcontroller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Greenhouse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Greenhouse_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Resep" (
    "id" SERIAL NOT NULL,
    "ppm_min" DOUBLE PRECISION NOT NULL,
    "ppm_max" DOUBLE PRECISION NOT NULL,
    "ph_min" DOUBLE PRECISION NOT NULL,
    "ph_max" DOUBLE PRECISION NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "nama" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Resep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penjadwalan" (
    "id" SERIAL NOT NULL,
    "waktu" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "durasi" INTEGER,
    "hari" INTEGER[],
    "resepId" INTEGER NOT NULL,
    "tandonId" INTEGER NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Penjadwalan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "logo" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "satuan" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sensor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "calibration" TEXT,
    "brand" TEXT NOT NULL,
    "unit_measurement" TEXT NOT NULL,
    "channel" INTEGER,
    "GPIO" INTEGER,
    "type" TEXT NOT NULL,
    "range_min" INTEGER,
    "range_max" INTEGER,
    "externalId" INTEGER,
    "microcontrollerId" INTEGER,
    "tandonId" INTEGER,
    "tandonBahanId" INTEGER,
    "greenhouseId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aktuator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "merek" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "GPIO" INTEGER,
    "externalId" INTEGER,
    "microcontrollerId" INTEGER,
    "type" TEXT NOT NULL,
    "tandonId" INTEGER,
    "greenhouseId" INTEGER,
    "tandonPenyimpananId" INTEGER,
    "tandonBahanId" INTEGER,
    "automation" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Aktuator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutomationSchedule" (
    "id" SERIAL NOT NULL,
    "aktuatorId" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "hari" INTEGER[] DEFAULT ARRAY[0, 1, 2, 3, 4, 5, 6]::INTEGER[],
    "interval" INTEGER NOT NULL,
    "iterasi" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "AutomationSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutomationSensor" (
    "id" SERIAL NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "aktuatorId" INTEGER NOT NULL,
    "sensorId" INTEGER NOT NULL,
    "condition" TEXT NOT NULL,
    "constant" INTEGER NOT NULL,
    "action" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "AutomationSensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TandonBahan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "tandonId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "TandonBahan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tandon" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Kosong',
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "rasioA" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "rasioB" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "rasioAir" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "ppm" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "capacity" DOUBLE PRECISION NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Tandon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "header" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "loc" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GreenhouseToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Microcontroller_name_key" ON "Microcontroller"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Greenhouse_name_key" ON "Greenhouse"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TandonPenyimpanan_nama_key" ON "TandonPenyimpanan"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE INDEX "Sensor_externalId_idx" ON "Sensor"("externalId");

-- CreateIndex
CREATE INDEX "Aktuator_externalId_idx" ON "Aktuator"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "AutomationSchedule_aktuatorId_key" ON "AutomationSchedule"("aktuatorId");

-- CreateIndex
CREATE UNIQUE INDEX "_GreenhouseToUser_AB_unique" ON "_GreenhouseToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GreenhouseToUser_B_index" ON "_GreenhouseToUser"("B");

-- AddForeignKey
ALTER TABLE "Microcontroller" ADD CONSTRAINT "Microcontroller_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TandonPenyimpanan" ADD CONSTRAINT "TandonPenyimpanan_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penjadwalan" ADD CONSTRAINT "Penjadwalan_resepId_fkey" FOREIGN KEY ("resepId") REFERENCES "Resep"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penjadwalan" ADD CONSTRAINT "Penjadwalan_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penjadwalan" ADD CONSTRAINT "Penjadwalan_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_type_fkey" FOREIGN KEY ("type") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_microcontrollerId_fkey" FOREIGN KEY ("microcontrollerId") REFERENCES "Microcontroller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_tandonBahanId_fkey" FOREIGN KEY ("tandonBahanId") REFERENCES "TandonBahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_greenhouseId_fkey" FOREIGN KEY ("greenhouseId") REFERENCES "Greenhouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_microcontrollerId_fkey" FOREIGN KEY ("microcontrollerId") REFERENCES "Microcontroller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_type_fkey" FOREIGN KEY ("type") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_greenhouseId_fkey" FOREIGN KEY ("greenhouseId") REFERENCES "Greenhouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_tandonPenyimpananId_fkey" FOREIGN KEY ("tandonPenyimpananId") REFERENCES "TandonPenyimpanan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aktuator" ADD CONSTRAINT "Aktuator_tandonBahanId_fkey" FOREIGN KEY ("tandonBahanId") REFERENCES "TandonBahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutomationSchedule" ADD CONSTRAINT "AutomationSchedule_aktuatorId_fkey" FOREIGN KEY ("aktuatorId") REFERENCES "Aktuator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutomationSensor" ADD CONSTRAINT "AutomationSensor_aktuatorId_fkey" FOREIGN KEY ("aktuatorId") REFERENCES "Aktuator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutomationSensor" ADD CONSTRAINT "AutomationSensor_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "Sensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TandonBahan" ADD CONSTRAINT "TandonBahan_tandonId_fkey" FOREIGN KEY ("tandonId") REFERENCES "Tandon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tandon" ADD CONSTRAINT "Tandon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GreenhouseToUser" ADD CONSTRAINT "_GreenhouseToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Greenhouse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GreenhouseToUser" ADD CONSTRAINT "_GreenhouseToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
