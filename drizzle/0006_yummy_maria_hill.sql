ALTER TABLE `beans` ADD CONSTRAINT `beans_public_id_unique` UNIQUE(`public_id`);--> statement-breakpoint
ALTER TABLE `roasters` ADD CONSTRAINT `roasters_public_id_unique` UNIQUE(`public_id`);