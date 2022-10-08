-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `accountStatus` VARCHAR(255) NOT NULL,
    `notificationCount` INTEGER NOT NULL DEFAULT 0,
    `email_Verified` BOOLEAN NOT NULL,
    `create_time` DATETIME(0) NULL,
    `update_time` DATETIME(0) NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `buildings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `thumbnail` VARCHAR(255) NOT NULL,
    `houseQuantity` INTEGER NOT NULL,
    `treasury` DOUBLE NOT NULL DEFAULT 0,
    `houseIDs` VARCHAR(255) NULL,
    `surface` DOUBLE NOT NULL,
    `creatorId` INTEGER NOT NULL,
    `adminIDs` VARCHAR(255) NULL,
    `residentIDs` VARCHAR(255) NULL,
    `create_time` DATETIME(0) NULL,
    `update_time` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `houses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `buildingId` INTEGER NOT NULL,
    `buildingName` VARCHAR(255) NOT NULL,
    `buildingSurface` DOUBLE NOT NULL,
    `houseId` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `creatorId` INTEGER NOT NULL,
    `adminIDs` VARCHAR(255) NULL,
    `residentIDs` VARCHAR(255) NULL,
    `size` DOUBLE NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `create_time` DATETIME(0) NULL,
    `update_time` DATETIME(0) NULL,

    UNIQUE INDEX `houses_houseId_key`(`houseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invitations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `buildingId` INTEGER NOT NULL,
    `buildingName` VARCHAR(255) NOT NULL,
    `senderId` INTEGER NOT NULL,
    `senderName` VARCHAR(255) NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `receiverName` VARCHAR(255) NOT NULL,
    `receiverHouseIDs` VARCHAR(255) NULL,
    `receiverHouseNames` VARCHAR(255) NULL,
    `receiverEmail` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `isAdmin` BOOLEAN NULL,
    `senderIsAdmin` BOOLEAN NULL,
    `create_time` DATETIME(0) NULL,
    `update_time` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `userName` VARCHAR(255) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `buildingId` INTEGER NOT NULL,
    `reason` VARCHAR(255) NOT NULL,
    `buildingName` VARCHAR(255) NOT NULL,
    `payementDate` DATETIME(0) NOT NULL,
    `create_time` DATETIME(0) NULL,
    `update_time` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `expenses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reason` VARCHAR(255) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `buildingId` INTEGER NOT NULL,
    `buildingName` VARCHAR(255) NOT NULL,
    `beneficiary` VARCHAR(255) NOT NULL,
    `expenseDate` DATETIME(0) NULL,
    `create_time` DATETIME(0) NULL,
    `update_time` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
