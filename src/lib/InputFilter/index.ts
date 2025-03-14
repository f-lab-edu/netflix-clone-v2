export const NumberTextFilter = (t: string): string => {
  return t.replace(/\D+/g, '')
}

export const CardNumberTextFilter = (t: string): string => {
  return NumberTextFilter(t).split(/(\d{1,4})/).filter(Boolean).join(' ')
}

export const ExpireDateTextFilter = (t: string): string => {
  return NumberTextFilter(t).split(/(\d{1,2})/).filter(Boolean).splice(0, 2).join('/')
}

export const DateEnTypeFilter = (t: string): string => {
  const numberText = NumberTextFilter(t)
  const matchResult = /(\d{2})?(\d{2})?(\d{4})?(.+)/.exec(numberText)
  return matchResult ? [matchResult[1], matchResult[2], matchResult[3], matchResult[4]].filter(Boolean).slice(0, 3).join('/') : ''
}

export const DateKrTypeFilter = (t: string, joinSeparator: string = '/'): string => {
  const numberText = NumberTextFilter(t)
  const matchResult = /(\d{4})?(\d{2})?(\d{2})?(.+)/.exec(numberText)
  return matchResult ? [matchResult[1], matchResult[2], matchResult[3], matchResult[4]].filter(Boolean).slice(0, 3).join(joinSeparator) : ''
}
