import { boolean, pgEnum, pgTable, serial, varchar } from 'drizzle-orm/pg-core'

// import { guideCategory } from '../../constants'
const guideCategory = ['life', 'intl', 'study', 'tips']

export const categoryEnum = pgEnum('category', guideCategory as [string, ...string[]])
export const guidebook = pgTable('guidebook', {
  id: serial('id').primaryKey(),
  content: varchar('content', { length: 512 }).notNull(),
  category: categoryEnum('category').notNull(),
  isReviewed: boolean('is_reviewed').default(false).notNull(),
})
