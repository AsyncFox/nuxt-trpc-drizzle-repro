import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { guidebook } from '../schema/schema'

const queryClient = postgres(env.DATABASE_URL)
export const db: PostgresJsDatabase = drizzle(queryClient)
export const guidebookInsertSchema = createInsertSchema(guidebook)
export const guidebookSelectSchema = createSelectSchema(guidebook)
