CREATE TABLE `payements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `buildingId` int NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `buildingName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payementDate` datetime NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
