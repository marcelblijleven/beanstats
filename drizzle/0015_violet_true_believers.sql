CREATE TABLE `share_entries` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`public_id` varchar(12),
	`name` varchar(255),
	`variety` varchar(255),
	`roast_date` date,
	CONSTRAINT `share_entries_id` PRIMARY KEY(`id`),
	CONSTRAINT `share_entries_public_id_unique` UNIQUE(`public_id`)
);
