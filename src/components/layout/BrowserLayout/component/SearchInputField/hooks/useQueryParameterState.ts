import type { ChangeEventHandler } from 'react';
import type { UrlObject } from 'url';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';

type CustomAction = (_obj: UrlObject) => void

export default function useQueryParameterState(key: string, action?: CustomAction): [string, ChangeEventHandler<HTMLInputElement>] {
  const router = useRouter()
  const searchParam = useSearchParams()

  const [keyword, setKeyword] = useState(searchParam.get(key) || '')

  const onChangeAction: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value
    setKeyword(value)

    const actionFunc = action ? action : router.replace
    actionFunc({
      query: { ...router.query, [key]: value }
    })
  }

  return [keyword, onChangeAction]
}