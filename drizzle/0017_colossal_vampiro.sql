ALTER TABLE `share_entries` ADD `roaster` varchar(255);--> statement-breakpoint
CREATE INDEX `public_id_index` ON `share_entries` (`public_id`);--> statement-breakpoint
ALTER TABLE `share_entries` DROP COLUMN `roast_date`;