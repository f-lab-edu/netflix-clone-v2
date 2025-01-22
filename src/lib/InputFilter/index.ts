import type { ChangeEventHandler } from 'react';

export const NumberInputFieldOnChangeEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]+/g, '')
}

export const CardNumberInputFieldOnChangeEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
  NumberInputFieldOnChangeEvent(e)
  e.target.value = e.target.value.split(/([0-9]{1,4})/).filter(Boolean).join(' ')
}

export const CardExpireDateInputFieldOnChangeEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
  NumberInputFieldOnChangeEvent(e)
  e.target.value = e.target.value.split(/([0-9]{1,2})/).filter(Boolean).splice(0, 2).join('/')
}

export const BirthDateInputFieldOnChangeEventForEn: ChangeEventHandler<HTMLInputElement> = (e) => {
  NumberInputFieldOnChangeEvent(e)
  const matchResult = /([0-9]{2})([0-9]{2})?([0-9]{4})?(.+)/.exec(e.target.value)
  if (matchResult) {
    e.target.value = [matchResult[1], matchResult[2], matchResult[3], matchResult[4]].filter(Boolean).slice(0, 3).join('/')
  }
}

export const BirthDateInputFieldOnChangeEventForKr: ChangeEventHandler<HTMLInputElement> = (e) => {
  NumberInputFieldOnChangeEvent(e)
  const matchResult = /([0-9]{4})([0-9]{2})?([0-9]{2})?(.+)/.exec(e.target.value)
  if (matchResult) {
    e.target.value = [matchResult[1], matchResult[2], matchResult[3], matchResult[4]].filter(Boolean).slice(0, 3).join('/')
  }
}

export const StringInputFieldOnChangeEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
  e.target.value = e.target.value.replace(/(?!\s)+/g, '')
}
