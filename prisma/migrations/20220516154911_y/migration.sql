/*
  Warnings:

  - You are about to alter the column `create_time` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `update_time` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `buildings` MODIFY `notes` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `expenses` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `houses` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `payements` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `sales` MODIFY `comment` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `tenants` MODIFY `notes` VARCHAR(65535) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `create_time` DATETIME NULL,
    MODIFY `update_time` DATETIME NULL;
