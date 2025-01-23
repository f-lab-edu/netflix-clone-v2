import AutoKeyGenerator from './utils/AutoKeyGenerator'
import JSONStorageGenerator from './utils/JSONStorageGenerator'

export const DataStorageName = 'msw-payment-data'
export const AutoKeyName = 'msw-payment-auto-key-idx'
type MSWPaymentDataStruct = {
  [key: number]: PaymentMethod
}

const isServer = typeof window === 'undefined'

const { issueAutoKeyIndex } = AutoKeyGenerator(isServer, AutoKeyName)
const { loadDataFromStorage, saveDataToStorage } = JSONStorageGenerator<MSWPaymentDataStruct>(isServer, DataStorageName)

export const GetMSWPaymentMethodByAccountId = (accountId: number) => {
  const datas = loadDataFromStorage()

  return Object.values(datas).filter(method => method.accountId === accountId)
}

export const InsertMSWPaymentMethod = (newData: Omit<PaymentMethod, 'id'>) => {
  const storage = loadDataFromStorage()
  const idx = issueAutoKeyIndex()
  storage[idx] = { id: idx, ...newData }
  saveDataToStorage(storage)
}

export const DeleteMSWAccountById = (accountId: number) => {
  const datas = loadDataFromStorage()
  delete datas[accountId]
  saveDataToStorage(datas)
}