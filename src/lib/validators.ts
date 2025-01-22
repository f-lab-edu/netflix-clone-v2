import CardValidator from 'card-validator'
import { AsYouType } from 'libphonenumber-js/mobile'

export const pattern = {
  email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
  password: /^(?!\s*$).{4,60}/
}

const validators = {
  phoneNumberType(v: string) {
    const phoneTypeChecker = new AsYouType()
    phoneTypeChecker.reset()
    phoneTypeChecker.input(v)
    const number = phoneTypeChecker.getNumber()
    return number?.getType() && number?.isPossible()
  },
  emailOrPhoneNumberType(v: string) {
    if (this.phoneNumberType(v)) return true
    if (pattern.email.test(v)) return true
    return false
  },
  cardNumber(v: string) {
    const result = CardValidator.number(v)
    return result.isValid
  },
  cardHolderName(v: string) {
    const result = CardValidator.cardholderName(v)
    return result.isValid
  },
  cardExpireDate(v: string) {
    const result = CardValidator.expirationDate(v, 25)
    return result.isValid
  },
  birthDateType(v: string) {
    const date = new Date(v)
    return !!date.toJSON()
  },
  checkBirthDateRange(v: string) {
    const today = new Date()
    const maxPossibleYear = today.getFullYear() - 19
    const date = new Date(v)
    const year = date.getFullYear()
    return 1900 < year && year < maxPossibleYear
  }
}

export default validators
