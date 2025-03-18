import { useSuspenseQuery } from '@tanstack/react-query';
import { GetContentById } from '@/lib/network/content/GetContentById';

export default function useGetContentById(contentId: number) {
  return useSuspenseQuery({
    queryKey: ['content', contentId],
    queryFn: () => GetContentById(contentId),
    select: (data) => {
      return data.content
    }
  })
}