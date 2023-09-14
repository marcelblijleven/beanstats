ALTER TABLE `users` RENAME COLUMN `userId` TO `clerk_id`;--> statement-breakpoint
ALTER TABLE `beans` MODIFY COLUMN `modified` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `roasters` MODIFY COLUMN `modified` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;