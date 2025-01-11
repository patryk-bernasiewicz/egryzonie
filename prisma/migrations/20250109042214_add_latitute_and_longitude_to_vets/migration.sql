/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Vet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Vet" ADD COLUMN "latitude" REAL;
ALTER TABLE "Vet" ADD COLUMN "longitude" REAL;

-- CreateIndex
CREATE UNIQUE INDEX "Vet_slug_key" ON "Vet"("slug");
