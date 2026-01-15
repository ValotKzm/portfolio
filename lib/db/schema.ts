import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  stack: text("stack").notNull(), // ex: "Next.js, Drizzle, Neon"
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  thumbnail: text("thumbnail_url"),
  createdAt: timestamp("created_at").defaultNow(),
});