CREATE TABLE `varieties` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`name` varchar(255),
	`processing` varchar(255),
	`country` varchar(255),
	`region` varchar(255),
	`farm` varchar(255),
	`farmer` varchar(255),
	`elevation` varchar(80),
	`bean_id` int NOT NULL,
	CONSTRAINT `varieties_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `beans` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`public_id` varchar(12),
	`created_at` timestamp DEFAULT (now()),
	`name` varchar(255) NOT NULL,
	`roast_date` date,
	`buy_date` date,
	`external_id` varchar(255),
	`notes` text,
	`weight` decimal(10,2),
	`price` decimal(10,2),
	`roaster_id` int NOT NULL,
	`is_public` boolean DEFAULT false,
	`is_archived` boolean DEFAULT false,
	`user_id` int NOT NULL,
	CONSTRAINT `beans_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `roasters` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`public_id` varchar(12),
	`name` varchar(255),
	`user_id` int NOT NULL,
	CONSTRAINT `roasters_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`public_id` varchar(12) NOT NULL,
	`userId` varchar(191) NOT NULL,
	`email` varchar(255),
	`username` varchar(255),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
