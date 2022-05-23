/*
  Warnings:

  - You are about to drop the column `Surface` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `buildings` table. All the data in the column will be lost.
  - You are about to alter the column `create_time` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_time` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[name]` on the table `buildings` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `surface` to the `buildings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `buildings` DROP COLUMN `Surface`,
    DROP COLUMN `description`,
    ADD COLUMN `surface` DOUBLE NOT NULL,
    ADD COLUMN `teamid` VARCHAR(255) NULL,
    MODIFY `houseIDs` VARCHAR(255) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL,
    MODIFY `notes` VARCHAR(65535) NULL,
    MODIFY `populationTotal` INTEGER NULL;

-- AlterTable
ALTER TABLE `expenses` ADD COLUMN `teamid` VARCHAR(255) NULL,
    MODIFY `comment` VARCHAR(65535) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL;

-- AlterTable
ALTER TABLE `houses` ADD COLUMN `teamid` VARCHAR(255) NULL,
    MODIFY `comment` VARCHAR(65535) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL;

-- AlterTable
ALTER TABLE `payements` ADD COLUMN `teamid` VARCHAR(255) NULL,
    MODIFY `comment` VARCHAR(65535) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL;

-- AlterTable
ALTER TABLE `sales` ADD COLUMN `teamid` VARCHAR(255) NULL,
    MODIFY `comment` VARCHAR(65535) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL;

-- AlterTable
ALTER TABLE `tenants` ADD COLUMN `teamid` VARCHAR(255) NULL,
    MODIFY `notes` VARCHAR(65535) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `teamid` VARCHAR(255) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL;

-- CreateIndex
CREATE UNIQUE INDEX `buildings_name_key` ON `buildings`(`name`);
