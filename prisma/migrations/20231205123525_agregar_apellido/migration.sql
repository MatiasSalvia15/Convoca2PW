/*
  Warnings:

  - Added the required column `apellido` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `player` ADD COLUMN `apellido` VARCHAR(191) NOT NULL;
