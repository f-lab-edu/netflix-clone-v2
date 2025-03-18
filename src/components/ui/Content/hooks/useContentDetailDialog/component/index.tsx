export type { ContentDetailDialogProps } from './ContentDetailDialog';
import ContentDetailDialog from './ContentDetailDialog'
import ContentDetailSkeleton from './ContentDetailSkeleton'

export default Object.assign(ContentDetailDialog, {
  Skeleton: ContentDetailSkeleton
})