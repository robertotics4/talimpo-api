-- CreateEnum
CREATE TYPE "EstablishmentType" AS ENUM ('AIRPORT', 'AMUSEMENT_PARK', 'APARTMENT', 'BANK', 'BAR', 'BAKERY', 'BEAUTY_SALON', 'BUS_STATION', 'CAFE', 'CHURCH', 'CINEMA', 'CLINIC', 'COMMERCIAL_CENTER', 'CONVENTION_CENTER', 'DENTAL_CLINIC', 'GAS_STATION', 'GYM', 'HOSPITAL', 'HOTEL', 'LABORATORY', 'LIBRARY', 'LOTTERY', 'MECHANIC', 'MUSEUM', 'OFFICE', 'PARK', 'PET_SHOP', 'PIZZERIA', 'POLICE_STATION', 'POST_OFFICE', 'RESTAURANT', 'SCHOOL', 'SHOPPING_CENTER', 'SPORTS_CENTER', 'STADIUM', 'SUPERMARKET', 'THEATER', 'TRAIN_STATION', 'UNIVERSITY', 'ZOO', 'CAR_WASH', 'HEALTH_POST');

-- CreateTable
CREATE TABLE "restrooms" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "isPublic" BOOLEAN NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "establishmentType" "EstablishmentType",
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "restrooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "restroomId" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(14) NOT NULL,
    "avatarUrl" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_restroomId_fkey" FOREIGN KEY ("restroomId") REFERENCES "restrooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
