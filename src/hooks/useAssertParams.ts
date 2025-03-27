import type { ZodObject, ZodRawShape } from 'zod';
import { notFound } from 'next/navigation';

export default function useAssertParams<T extends ZodRawShape>(z: ZodObject<T>, params: object) {
  const result = z.safeParse(params)
  if (result.error) {
    notFound()
  }
  return result.data
}
