CREATE TYPE "public"."user_role" AS ENUM('admin', 'mod', 'user');--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "role" "user_role" DEFAULT 'user' NOT NULL;--> statement-breakpoint
ALTER TABLE "invitations" ADD COLUMN "role" "user_role" DEFAULT 'admin' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "isAdmin";--> statement-breakpoint
ALTER TABLE "invitations" DROP COLUMN "isAdmin";--> statement-breakpoint
ALTER TABLE "invitations" DROP COLUMN "nbUsage";--> statement-breakpoint
ALTER TABLE "invitations" DROP COLUMN "currentUsage";