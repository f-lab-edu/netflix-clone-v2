import { z } from 'zod';

export const ReviewWritePageParamRule = z.object({
  contentId: z.string().regex(/^\d+$/).transform(v => Number(v))
})

export const ReviewListPageParamRule = ReviewWritePageParamRule
