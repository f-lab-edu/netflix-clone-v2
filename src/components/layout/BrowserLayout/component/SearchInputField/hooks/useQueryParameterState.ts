import type { ParsedUrlQuery } from 'querystring';
import type { ChangeEventHandler } from 'react';
import type { UrlObject } from 'url';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

type CustomAction = (_obj: Omit<UrlObject, 'query'> & { query: ParsedUrlQuery }) => void

export default function useQueryParameterState(key: string, action?: CustomAction): [string, ChangeEventHandler<HTMLInputElement>] {
  const router = useRouter()
  const searchParam = useSearchParams()

  const onChangeAction: ChangeEventHandler<HTMLInputElement> = (event) => {
    const actionFunc = action ?? router.replace
    actionFunc({
      query: { ...router.query, [key]: event.target.value }
    })
  }

  return [searchParam.get(key) ?? '', onChangeAction]
}