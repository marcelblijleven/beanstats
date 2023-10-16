DROP INDEX `name_index` ON `cafe_brews`;--> statement-breakpoint
ALTER TABLE `cafe_brews` MODIFY COLUMN `type` varchar(128) NOT NULL;--> statement-breakpoint
ALTER TABLE `cafe_brews` ADD `coffee_variety` varchar(128);--> statement-breakpoint
ALTER TABLE `cafe_brews` ADD `coffee_origin` varchar(128);--> statement-breakpoint
CREATE INDEX `name_index` ON `cafe_brews` (`type`);--> statement-breakpoint
ALTER TABLE `cafe_brews` DROP COLUMN `name`;