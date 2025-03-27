import type { ZodObject, ZodRawShape } from 'zod';
import { notFound, useParams } from 'next/navigation';

export default function useAssertParams<T extends ZodRawShape>(z: ZodObject<T>) {
  const params = useParams()
  const result = z.safeParse(params)
  if (result.error) {
    return notFound()
  }
  return result.data
}
