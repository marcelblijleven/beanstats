ALTER TABLE `roasters` DROP CONSTRAINT `roasters_name_unique`;--> statement-breakpoint
ALTER TABLE `roasters` ADD CONSTRAINT `roasters_user_id_name_unique` UNIQUE(`user_id`,`name`);