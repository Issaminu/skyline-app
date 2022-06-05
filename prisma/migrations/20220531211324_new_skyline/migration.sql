/*
  Warnings:

  - You are about to drop the column `floors` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `houseSize` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `populationTotal` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `rent` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `teamid` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `userIDs` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `houseId` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `teamid` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `expenseIDs` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `floor` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `houseNumber` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `priceRent` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `teamid` on the `houses` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `payements` table. All the data in the column will be lost.
  - You are about to drop the column `teamid` on the `payements` table. All the data in the column will be lost.
  - You are about to alter the column `buildingId` on the `payements` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Int`.
  - You are about to drop the column `type` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `rents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tenants` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `buildings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorId` to the `buildings` table without a default value. This is not possible if the table is not empty.
  - Made the column `buildingId` on table `expenses` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `creatorId` to the `houses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `buildings` DROP COLUMN `floors`,
    DROP COLUMN `houseSize`,
    DROP COLUMN `images`,
    DROP COLUMN `notes`,
    DROP COLUMN `populationTotal`,
    DROP COLUMN `rent`,
    DROP COLUMN `teamid`,
    DROP COLUMN `userIDs`,
    ADD COLUMN `adminIDs` VARCHAR(191) NULL,
    ADD COLUMN `city` VARCHAR(255) NOT NULL,
    ADD COLUMN `creatorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `residentIDs` VARCHAR(255) NULL,
    ADD COLUMN `treasury` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `expenses` DROP COLUMN `comment`,
    DROP COLUMN `houseId`,
    DROP COLUMN `teamid`,
    MODIFY `buildingId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `houses` DROP COLUMN `comment`,
    DROP COLUMN `description`,
    DROP COLUMN `expenseIDs`,
    DROP COLUMN `floor`,
    DROP COLUMN `houseNumber`,
    DROP COLUMN `priceRent`,
    DROP COLUMN `teamid`,
    ADD COLUMN `adminIDs` VARCHAR(255) NULL,
    ADD COLUMN `creatorId` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `payements` DROP COLUMN `comment`,
    DROP COLUMN `teamid`,
    MODIFY `buildingId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `type`,
    ADD COLUMN `notificationCount` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `rents`;

-- DropTable
DROP TABLE `tenants`;

-- CreateTable
CREATE TABLE `invitations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `buildingId` INTEGER NOT NULL,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `receiverEmail` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `isAccepted` VARCHAR(255) NULL,
    `isValidated` VARCHAR(255) NULL,
    `isAdmin` VARCHAR(255) NULL,
    `create_time` DATETIME(0) NULL,
    `update_time` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
