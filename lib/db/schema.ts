import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  stack: text("stack").notNull(), // ex: "Next.js, Drizzle, Neon"
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  createdAt: timestamp("created_at").defaultNow(),
});