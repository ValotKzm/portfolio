"use server"
import { desc } from "drizzle-orm"
import { db } from "@/lib/db/drizzle"
import { projects } from "@/lib/db/schema"

// Sans ORDER BY, Postgres renvoie les lignes dans un ordre arbitraire qui change après une mise à jour.
export const getProject = async () => {
    const allProjects = await db.select().from(projects).orderBy(desc(projects.id))
    return allProjects
}