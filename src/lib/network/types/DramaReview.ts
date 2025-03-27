import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

export default class DramaReview {

  private static dateChecker(a: string | number, b: string | number) {
    return new Date(a) < new Date(b)
  }

  static baseObj = z.object({
    contentId: z.number(),
    watchState: z.enum(['none', 'watching', 'end']),
    watchStartDate: z.string().date(),
    watchEndDate: z.string().or(z.string().date()),
    rate: z.number(),
    comment: z.string(),
    willRecommend: z.boolean(),
    isPublic: z.boolean(),
  })

  static reviewObj = this.baseObj.extend({
    id: z.number(),
    createAt: z.number(),
    modifiedAt: z.number(),
    deleteAt: z.number()
  })

  static formObj = this.baseObj.extend({
    willRecommend: z.enum(['true', 'false']),
    isPublic: z.enum(['true', 'false']),
  })

  static hookFormResolver(steps: number, contentUploadDate: string) {
    return zodResolver(
      this.formObj
        .refine((data) => this.dateChecker(String(contentUploadDate), data.watchStartDate), {
          message: '시청 시작일은 개봉일보다 빠를 수 없습니다.',
          path: ['watchStartDate']
        })
        .refine((data) => data.watchState === 'end' ? data.watchEndDate : true, {
          message: '다봤음 상태에서 시청 종료일을 선택해야 합니다.',
          path: ['watchEndDate']
        })
        .refine((data) => data.watchState === 'end' ? this.dateChecker(data.watchStartDate, data.watchEndDate) : true, {
          message: '시청 종료일은 시청 시작일보다 빠를 수 없습니다.',
          path: ['watchEndDate']
        })
        .refine((data) =>
          steps >= 3 && (data.rate === 1 || data.rate === 5) ?
            data.comment.length >= 100 && data.comment.length <= 300 :
            true, {
          message: '별점이 1점 또는 5점이면 후기는 최소 100자에서 300자를 작성 해야합니다.',
          path: ['comment'],
        })
    )
  }

  static formAsBaseObj = this.formObj.transform(v => ({
    ...v,
    willRecommend: v.willRecommend === 'true',
    isPublic: v.isPublic === 'true'
  }))

  static transformAsBaseObj(obj: z.infer<typeof DramaReview.formObj>) {
    return this.formAsBaseObj.parse(obj)
  }
}
export type DramaReviewType = z.infer<typeof DramaReview.reviewObj>
export type DramaReviewFormDataType = z.infer<typeof DramaReview.formObj>
