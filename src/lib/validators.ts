import { AsYouType } from 'libphonenumber-js/mobile'

const validators = {
  emailTypeCheck: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test,
  phoneNumberType: (v: string) => {
    const phoneTypeChecker = new AsYouType()
    phoneTypeChecker.reset()
    phoneTypeChecker.input(v)
    const number = phoneTypeChecker.getNumber()
    return number?.getType() && number?.isPossible()
  },
}

export default validators