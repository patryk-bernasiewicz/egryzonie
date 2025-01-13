/*
  Warnings:

  - You are about to drop the column `buildingNumber` on the `Vet` table. All the data in the column will be lost.
  - You are about to drop the column `streetName` on the `Vet` table. All the data in the column will be lost.
  - You are about to drop the column `streetNumber` on the `Vet` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "slug" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "latitude" REAL,
    "longitude" REAL
);
INSERT INTO "new_Vet" ("address", "createdAt", "email", "id", "latitude", "longitude", "name", "phone", "slug", "updatedAt") SELECT "address", "createdAt", "email", "id", "latitude", "longitude", "name", "phone", "slug", "updatedAt" FROM "Vet";
DROP TABLE "Vet";
ALTER TABLE "new_Vet" RENAME TO "Vet";
CREATE UNIQUE INDEX "Vet_slug_key" ON "Vet"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
