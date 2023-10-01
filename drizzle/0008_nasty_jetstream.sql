ALTER TABLE `varieties` RENAME COLUMN `created_at` TO `created`;--> statement-breakpoint
ALTER TABLE `beans` ADD `is_finished` boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE `beans` ADD `rating` int;--> statement-breakpoint
ALTER TABLE `beans` ADD `roasted_for` varchar(20);--> statement-breakpoint
ALTER TABLE `beans` ADD CONSTRAINT `beans_external_id_unique` UNIQUE(`external_id`);