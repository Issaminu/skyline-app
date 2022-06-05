/*
  Warnings:

  - You are about to drop the column `percentangeOfBuilding` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `houseId` on the `tenants` table. All the data in the column will be lost.
  - You are about to drop the column `isMarried` on the `tenants` table. All the data in the column will be lost.
  - You are about to drop the column `profession` on the `tenants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cin]` on the table `tenants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `houseSize` to the `buildings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rent` to the `buildings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buildingName` to the `houses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buildingSurface` to the `houses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floor` to the `houses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `houseNumber` to the `houses` table without a default value. This is not possible if the table is not empty.
  - Made the column `cin` on table `tenants` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `buildings` ADD COLUMN `houseSize` DOUBLE NOT NULL,
    ADD COLUMN `rent` DOUBLE NOT NULL,
    MODIFY `notes` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `expenses` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `houses` DROP COLUMN `percentangeOfBuilding`,
    ADD COLUMN `buildingName` VARCHAR(255) NOT NULL,
    ADD COLUMN `buildingSurface` DOUBLE NOT NULL,
    ADD COLUMN `floor` INTEGER NOT NULL,
    ADD COLUMN `houseNumber` INTEGER NOT NULL,
    MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `payements` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `rents` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `tenants` DROP COLUMN `houseId`,
    DROP COLUMN `isMarried`,
    DROP COLUMN `profession`,
    ADD COLUMN `houseIDs` VARCHAR(255) NULL,
    ADD COLUMN `job` VARCHAR(255) NULL,
    MODIFY `cin` VARCHAR(255) NOT NULL,
    MODIFY `notes` VARCHAR(65535) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tenants_cin_key` ON `tenants`(`cin`);
