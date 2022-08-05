CREATE TABLE `invitations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `buildingId` int NOT NULL,
  `buildingName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `senderId` int NOT NULL,
  `senderName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `receiverId` int NOT NULL,
  `receiverHouseIDs` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receiverHouseNames` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receiverEmail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `senderIsAdmin` tinyint(1) DEFAULT NULL,
  `receiverName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
