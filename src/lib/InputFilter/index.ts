import type { ChangeEventHandler } from 'react';

export const NumberInputFieldOnChangeEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
  e.target.value = e.target.value.replace(/\D+/g, '')
}

export const CardNumberInputFieldOnChangeEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
  NumberInputFieldOnChangeEvent(e)
  e.target.value = e.target.value.split(/(\d{1,4})/).filter(Boolean).join(' ')
}

export const CardExpireDateInputFieldOnChangeEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
  NumberInputFieldOnChangeEvent(e)
  e.target.value = e.target.value.split(/(\d{1,2})/).filter(Boolean).splice(0, 2).join('/')
}

export const BirthDateInputFieldOnChangeEventForEn: ChangeEventHandler<HTMLInputElement> = (e) => {
  NumberInputFieldOnChangeEvent(e)
  const matchResult = /(\d{2})(\d{2})?(\d{4})?(.+)/.exec(e.target.value)
  if (matchResult) {
    e.target.value = [matchResult[1], matchResult[2], matchResult[3], matchResult[4]].filter(Boolean).slice(0, 3).join('/')
  }
}

export const BirthDateInputFieldOnChangeEventForKr: ChangeEventHandler<HTMLInputElement> = (e) => {
  NumberInputFieldOnChangeEvent(e)
  const matchResult = /(\d{4})(\d{2})?(\d{2})?(.+)/.exec(e.target.value)
  if (matchResult) {
    e.target.value = [matchResult[1], matchResult[2], matchResult[3], matchResult[4]].filter(Boolean).slice(0, 3).join('/')
  }
}
