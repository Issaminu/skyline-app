CREATE TABLE `buildings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `houseQuantity` int NOT NULL,
  `treasury` double NOT NULL DEFAULT '0',
  `houseIDs` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `surface` double NOT NULL,
  `creatorId` int NOT NULL,
  `adminIDs` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `residentIDs` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
