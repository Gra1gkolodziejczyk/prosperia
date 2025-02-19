ALTER TABLE "public"."users" ALTER COLUMN "role" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "public"."invitations" ALTER COLUMN "role" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."user_role" CASCADE;--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('admin', 'superAdmin', 'user');--> statement-breakpoint
ALTER TABLE "public"."users" ALTER COLUMN "role" SET DATA TYPE "public"."user_role" USING "role"::"public"."user_role";--> statement-breakpoint
ALTER TABLE "public"."invitations" ALTER COLUMN "role" SET DATA TYPE "public"."user_role" USING "role"::"public"."user_role";