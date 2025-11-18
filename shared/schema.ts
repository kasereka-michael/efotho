import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const courses = pgTable("courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  instructor: text("instructor").notNull(),
  location: text("location").notNull(),
  date: text("date").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
});

export const intervenants = pgTable("intervenants", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const alumni = pgTable("alumni", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
  galleryImages: text("gallery_images").array().notNull(),
});

export const insertCourseSchema = createInsertSchema(courses).omit({ id: true });
export const insertIntervenantSchema = createInsertSchema(intervenants).omit({ id: true });
export const insertAlumniSchema = createInsertSchema(alumni).omit({ id: true });

export type Course = typeof courses.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Intervenant = typeof intervenants.$inferSelect;
export type InsertIntervenant = z.infer<typeof insertIntervenantSchema>;
export type Alumni = typeof alumni.$inferSelect;
export type InsertAlumni = z.infer<typeof insertAlumniSchema>;
