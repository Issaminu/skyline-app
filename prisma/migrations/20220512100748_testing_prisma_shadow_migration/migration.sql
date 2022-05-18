-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `houseId` VARCHAR(255) NULL,
    `accountStatus` VARCHAR(255) NOT NULL,
    `email_Verified` BOOLEAN NOT NULL,
    `create_time` DATE NULL,
    `update_time` DATE NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `buildings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(1000) NULL,
    `location` VARCHAR(255) NOT NULL,
    `thumbnail` VARCHAR(255) NOT NULL,
    `floors` INTEGER NOT NULL,
    `images` VARCHAR(255) NULL,
    `houseQuantity` INTEGER NOT NULL,
    `houseIDs` VARCHAR(255) NOT NULL,
    `Surface` DOUBLE NOT NULL,
    `userIDs` VARCHAR(255) NULL,
    `comment` VARCHAR(65535) NULL,
    `create_time` DATE NULL,
    `update_time` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `houses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(1000) NULL,
    `buildingId` INTEGER NOT NULL,
    `thumbnail` VARCHAR(255) NOT NULL,
    `images` VARCHAR(255) NULL,
    `bedrooms` INTEGER NULL,
    `bathrooms` INTEGER NULL,
    `saloon` INTEGER NULL,
    `kitchen` INTEGER NULL,
    `userIDs` VARCHAR(255) NULL,
    `location` VARCHAR(255) NOT NULL,
    `size` DOUBLE NOT NULL,
    `percentangeOfBuilding` INTEGER NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `priceBuy` DOUBLE NOT NULL,
    `comment` VARCHAR(65535) NULL,
    `expenseIDs` VARCHAR(255) NULL,
    `create_time` DATE NULL,
    `update_time` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `houseId` INTEGER NOT NULL,
    `houseName` VARCHAR(255) NOT NULL,
    `buildingId` VARCHAR(255) NOT NULL,
    `buildingName` VARCHAR(255) NOT NULL,
    `comment` VARCHAR(65535) NULL,
    `userIDs` VARCHAR(191) NOT NULL,
    `buyMonths` INTEGER NOT NULL,
    `remainingPrice` DOUBLE NULL,
    `payementIDs` VARCHAR(255) NULL,
    `create_time` DATE NULL,
    `update_time` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(255) NOT NULL,
    `userID` INTEGER NOT NULL,
    `comment` VARCHAR(65535) NULL,
    `amount` DOUBLE NOT NULL,
    `month` INTEGER NOT NULL,
    `status` VARCHAR(255) NULL,
    `houseId` INTEGER NOT NULL,
    `buildingId` VARCHAR(255) NOT NULL,
    `create_time` DATE NULL,
    `update_time` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `expenses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reason` VARCHAR(255) NOT NULL,
    `comment` VARCHAR(65535) NULL,
    `amount` DOUBLE NOT NULL,
    `date` DATETIME(3) NULL,
    `status` VARCHAR(255) NULL,
    `buildingId` INTEGER NULL,
    `houseId` INTEGER NULL,
    `create_time` DATE NULL,
    `update_time` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
