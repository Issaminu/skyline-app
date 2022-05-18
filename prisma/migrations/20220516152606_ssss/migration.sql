/*
  Warnings:

  - You are about to drop the column `comment` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `houseId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - Added the required column `populationTotal` to the `buildings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `buildings` DROP COLUMN `comment`,
    ADD COLUMN `notes` VARCHAR(65535) NULL,
    ADD COLUMN `populationTotal` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `expenses` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `houses` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `payements` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `sales` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `houseId`,
    DROP COLUMN `password`,
    ADD COLUMN `phone` VARCHAR(255) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL;

-- CreateTable
CREATE TABLE `tenants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `image` VARCHAR(255) NULL,
    `familySize` INTEGER NULL,
    `isMarried` BOOLEAN NULL,
    `profession` VARCHAR(255) NULL,
    `buildingId` VARCHAR(255) NULL,
    `houseId` VARCHAR(255) NULL,
    `cin` VARCHAR(255) NULL,
    `cinRecto` VARCHAR(255) NULL,
    `cinVerso` VARCHAR(255) NULL,
    `accountStatus` VARCHAR(255) NOT NULL,
    `notes` VARCHAR(65535) NULL,
    `create_time` DATE NULL,
    `update_time` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
