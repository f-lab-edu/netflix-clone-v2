import AutoKeyGenerator from './utils/AutoKeyGenerator'
import JSONStorageGenerator from './utils/JSONStorageGenerator'

export const DataStorageName = 'msw-account-data'
export const AutoKeyName = 'msw-account-auto-key-idx'
type MSWAccountDataStruct = {
  [key: number]: AccountBaseInfo
}

const isServer = typeof window === 'undefined'

const { issueAutoKeyIndex } = AutoKeyGenerator(isServer, AutoKeyName)
const { loadDataFromStorage, saveDataToStorage } = JSONStorageGenerator<MSWAccountDataStruct>(isServer, DataStorageName)

export const GetMSWAllAcount = () => {
  return loadDataFromStorage()
}

export const GetMSWAccountById = (accountId: number) => {
  const datas = loadDataFromStorage()
  return datas[accountId]
}

export const UpdateMSWAccountById = (accountId: number, newData: AccountBaseInfo) => {
  const datas = loadDataFromStorage()
  datas[accountId] = Object.assign(datas[accountId] || {}, newData)
  saveDataToStorage(datas)
}

export const InsertMSWAccount = (newData: Omit<AccountBaseInfo, 'id'>) => {
  const idx = issueAutoKeyIndex()
  UpdateMSWAccountById(idx, { id: idx, ...newData })
  return idx
}

export const DeleteMSWAccountById = (accountId: number) => {
  const datas = loadDataFromStorage()
  delete datas[accountId]
  saveDataToStorage(datas)
}
