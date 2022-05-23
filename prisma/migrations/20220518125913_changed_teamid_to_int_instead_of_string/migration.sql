/*
  Warnings:

  - You are about to alter the column `create_time` on the `buildings` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_time` on the `buildings` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `create_time` on the `expenses` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_time` on the `expenses` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `create_time` on the `houses` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_time` on the `houses` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `create_time` on the `payements` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_time` on the `payements` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `create_time` on the `sales` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_time` on the `sales` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `create_time` on the `tenants` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_time` on the `tenants` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `teamid` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `create_time` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_time` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Made the column `teamid` on table `buildings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamid` on table `expenses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamid` on table `houses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamid` on table `payements` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamid` on table `sales` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamid` on table `tenants` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `buildings` MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL,
    MODIFY `notes` VARCHAR(65535) NULL,
    MODIFY `teamid` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `expenses` MODIFY `comment` VARCHAR(65535) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL,
    MODIFY `teamid` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `houses` MODIFY `comment` VARCHAR(65535) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL,
    MODIFY `teamid` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `payements` MODIFY `comment` VARCHAR(65535) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL,
    MODIFY `teamid` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sales` MODIFY `comment` VARCHAR(65535) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL,
    MODIFY `teamid` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tenants` MODIFY `notes` VARCHAR(65535) NULL,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL,
    MODIFY `teamid` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `teamid`,
    MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL;
