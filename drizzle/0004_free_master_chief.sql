CREATE INDEX `bean_id_index` ON `varieties` (`bean_id`);--> statement-breakpoint
CREATE INDEX `name_index` ON `varieties` (`name`);--> statement-breakpoint
CREATE INDEX `processing_index` ON `varieties` (`processing`);--> statement-breakpoint
CREATE INDEX `public_id_index` ON `beans` (`public_id`);--> statement-breakpoint
CREATE INDEX `user_id_index` ON `beans` (`user_id`);--> statement-breakpoint
CREATE INDEX `name_index` ON `beans` (`name`);--> statement-breakpoint
CREATE INDEX `roaster_id_index` ON `beans` (`roaster_id`);--> statement-breakpoint
CREATE INDEX `public_id_index` ON `roasters` (`public_id`);--> statement-breakpoint
CREATE INDEX `user_id_index` ON `roasters` (`user_id`);--> statement-breakpoint
CREATE INDEX `name_index` ON `roasters` (`name`);--> statement-breakpoint
CREATE INDEX `public_id_index` ON `users` (`public_id`);--> statement-breakpoint
CREATE INDEX `clerk_id_index` ON `users` (`clerk_id`);