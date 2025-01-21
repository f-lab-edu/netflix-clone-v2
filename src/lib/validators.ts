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
  }
}

export default validators
