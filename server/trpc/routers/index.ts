import { z } from 'zod'
import { and, eq } from 'drizzle-orm'
import { publicProcedure, router } from '../trpc'
import { guidebook } from '../../schema/schema'

const guideCategory = ['life', 'intl', 'study', 'tips']

export const appRouter = router({
  getReviewedGuide: publicProcedure
    .input(z.object({ category: z.enum(guideCategory as [string, ...string[]]) }))
    .query(async ({ input }) => {
      return await db.select()
        .from(guidebook)
        .where(and(eq(guidebook.category, input.category), eq(guidebook.isReviewed, true)))
    }),
  hello: publicProcedure.query(() => 'hello'),
})

// export type definition of API
export type AppRouter = typeof appRouter
