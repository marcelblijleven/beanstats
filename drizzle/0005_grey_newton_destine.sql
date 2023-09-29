ALTER TABLE `roasters` MODIFY COLUMN `name` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `roasters` ADD `country` varchar(255);--> statement-breakpoint
ALTER TABLE `roasters` ADD CONSTRAINT `roasters_name_unique` UNIQUE(`name`);