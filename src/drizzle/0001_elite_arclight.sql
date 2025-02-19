ALTER TABLE "invitations" ALTER COLUMN "expireAt" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "invitations" ADD COLUMN "isExpirable" boolean DEFAULT true NOT NULL;