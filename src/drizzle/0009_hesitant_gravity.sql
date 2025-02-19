CREATE TABLE "blogCategories" (
	"blogId" uuid NOT NULL,
	"categoryId" uuid NOT NULL,
	CONSTRAINT "blogCategories_blogId_categoryId_pk" PRIMARY KEY("blogId","categoryId")
);
--> statement-breakpoint
DROP TABLE "blog_categories" CASCADE;--> statement-breakpoint
ALTER TABLE "blogCategories" ADD CONSTRAINT "blogCategories_blogId_blogs_id_fk" FOREIGN KEY ("blogId") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blogCategories" ADD CONSTRAINT "blogCategories_categoryId_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;