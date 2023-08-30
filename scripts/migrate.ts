import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import { env } from '../server/utils/env'

// for migrations
const migrationClient = postgres(env.DATABASE_URL, { max: 1 })
async function useMigrate() {
  await migrate(drizzle(migrationClient), { migrationsFolder: 'drizzle' })
}
useMigrate().then(() => {
  console.log('Migration completed!')
  migrationClient.end()
})
