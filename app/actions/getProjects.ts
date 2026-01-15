"use server"
import { db } from "@/lib/db/drizzle"
import { projects } from "@/lib/db/schema"

export const getProject = async () => {
    const allProjects = await db.select().from(projects)
    return allProjects
}