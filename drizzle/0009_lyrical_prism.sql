CREATE TABLE `cafe_brews` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`public_id` varchar(12),
	`user_id` int NOT NULL,
	`name` varchar(128) NOT NULL,
	`type` varchar(128),
	`date` date,
	`notes` text,
	`cafe` varchar(128) NOT NULL,
	`cafe_city` varchar(128),
	`cafe_country` varchar(80),
	`rating` int,
	`is_public` boolean DEFAULT false,
	CONSTRAINT `cafe_brews_id` PRIMARY KEY(`id`),
	CONSTRAINT `cafe_brews_public_id_unique` UNIQUE(`public_id`)
);
--> statement-breakpoint
CREATE INDEX `public_id_index` ON `cafe_brews` (`public_id`);--> statement-breakpoint
CREATE INDEX `user_id_index` ON `cafe_brews` (`user_id`);--> statement-breakpoint
CREATE INDEX `name_index` ON `cafe_brews` (`name`);