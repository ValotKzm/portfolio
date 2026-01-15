ALTER TABLE "projects" DROP CONSTRAINT "projects_slug_unique";--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "thumbnail_url" text;--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN "slug";