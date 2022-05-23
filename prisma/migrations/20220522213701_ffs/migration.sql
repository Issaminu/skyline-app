/*
  Warnings:

  - You are about to drop the column `bathrooms` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `bedrooms` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `kitchen` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `priceBuy` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `saloon` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `payements` table. All the data in the column will be lost.
  - You are about to drop the `sales` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[houseId]` on the table `houses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `houseId` to the `houses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `buildings` MODIFY `notes` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `expenses` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `houses` DROP COLUMN `bathrooms`,
    DROP COLUMN `bedrooms`,
    DROP COLUMN `images`,
    DROP COLUMN `kitchen`,
    DROP COLUMN `priceBuy`,
    DROP COLUMN `saloon`,
    DROP COLUMN `thumbnail`,
    ADD COLUMN `houseId` VARCHAR(255) NOT NULL,
    ADD COLUMN `priceRent` DOUBLE NULL,
    MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `payements` DROP COLUMN `month`,
    MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `tenants` MODIFY `notes` VARCHAR(65535) NULL;

-- DropTable
DROP TABLE `sales`;

-- CreateTable
CREATE TABLE `rents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `houseId` INTEGER NOT NULL,
    `houseName` VARCHAR(255) NOT NULL,
    `buildingId` VARCHAR(255) NOT NULL,
    `buildingName` VARCHAR(255) NOT NULL,
    `comment` VARCHAR(65535) NULL,
    `userIDs` VARCHAR(191) NOT NULL,
    `payementIDs` VARCHAR(255) NULL,
    `teamid` INTEGER NOT NULL,
    `create_time` DATETIME(0) NULL,
    `update_time` DATETIME(0) NULL,

    UNIQUE INDEX `rents_houseName_key`(`houseName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `houses_houseId_key` ON `houses`(`houseId`);
