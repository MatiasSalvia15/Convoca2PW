/*
  Warnings:

  - You are about to drop the column `firstname` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `team` on the `player` table. All the data in the column will be lost.
  - Added the required column `edad` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipo` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `player` DROP COLUMN `firstname`,
    DROP COLUMN `lastname`,
    DROP COLUMN `team`,
    ADD COLUMN `edad` VARCHAR(191) NOT NULL,
    ADD COLUMN `equipo` VARCHAR(191) NOT NULL,
    ADD COLUMN `nombre` VARCHAR(191) NOT NULL;
