ALTER TABLE "messages" ALTER COLUMN "isViewed" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "customUrl" text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "summary" text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "isPublished" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_customUrl_unique" UNIQUE("customUrl");