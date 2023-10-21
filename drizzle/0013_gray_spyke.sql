CREATE TABLE `freeze_entries` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`public_id` varchar(12),
	`user_id` int NOT NULL,
	`label` varchar(128) NOT NULL,
	`bean_id` int NOT NULL,
	`weight` decimal(10,2) NOT NULL,
	`freeze_date` date NOT NULL,
	`frozen` boolean DEFAULT true,
	`notes` text,
	`modified` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`created` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `freeze_entries_id` PRIMARY KEY(`id`),
	CONSTRAINT `freeze_entries_public_id_unique` UNIQUE(`public_id`)
);
--> statement-breakpoint
CREATE INDEX `public_id_index` ON `freeze_entries` (`public_id`);--> statement-breakpoint
CREATE INDEX `user_id_index` ON `freeze_entries` (`user_id`);--> statement-breakpoint
CREATE INDEX `bean_id_index` ON `freeze_entries` (`bean_id`);