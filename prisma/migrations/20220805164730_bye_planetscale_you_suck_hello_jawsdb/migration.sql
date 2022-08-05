/*
  Warnings:

  - You are about to alter the column `creatorId` on the `buildings` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the column `date` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `userIDs` on the `houses` table. All the data in the column will be lost.
  - You are about to alter the column `creatorId` on the `houses` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Int`.
  - You are about to drop the column `isAccepted` on the `invitations` table. All the data in the column will be lost.
  - You are about to drop the column `isValidated` on the `invitations` table. All the data in the column will be lost.
  - You are about to alter the column `isAdmin` on the `invitations` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `TinyInt`.
  - You are about to drop the column `houseId` on the `payements` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `payements` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `payements` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `payements` table. All the data in the column will be lost.
  - Added the required column `beneficiary` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buildingName` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buildingName` to the `invitations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverName` to the `invitations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderName` to the `invitations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buildingName` to the `payements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payementDate` to the `payements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `payements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `payements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `payements` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `buildings_name_key` ON `buildings`;

-- AlterTable
ALTER TABLE `buildings` MODIFY `adminIDs` VARCHAR(255) NULL,
    MODIFY `creatorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `expenses` DROP COLUMN `date`,
    DROP COLUMN `status`,
    ADD COLUMN `beneficiary` VARCHAR(255) NOT NULL,
    ADD COLUMN `buildingName` VARCHAR(255) NOT NULL,
    ADD COLUMN `expenseDate` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `houses` DROP COLUMN `userIDs`,
    ADD COLUMN `residentIDs` VARCHAR(255) NULL,
    MODIFY `creatorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `invitations` DROP COLUMN `isAccepted`,
    DROP COLUMN `isValidated`,
    ADD COLUMN `buildingName` VARCHAR(255) NOT NULL,
    ADD COLUMN `receiverHouseIDs` VARCHAR(255) NULL,
    ADD COLUMN `receiverHouseNames` VARCHAR(255) NULL,
    ADD COLUMN `receiverName` VARCHAR(255) NOT NULL,
    ADD COLUMN `senderIsAdmin` BOOLEAN NULL,
    ADD COLUMN `senderName` VARCHAR(255) NOT NULL,
    MODIFY `isAdmin` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `payements` DROP COLUMN `houseId`,
    DROP COLUMN `status`,
    DROP COLUMN `type`,
    DROP COLUMN `userID`,
    ADD COLUMN `buildingName` VARCHAR(255) NOT NULL,
    ADD COLUMN `payementDate` DATETIME(0) NOT NULL,
    ADD COLUMN `reason` VARCHAR(255) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD COLUMN `userName` VARCHAR(255) NOT NULL;
