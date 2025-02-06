import AutoKeyGenerator from './utils/AutoKeyGenerator'
import JSONStorageGenerator from './utils/JSONStorageGenerator'

export const DataStorageName = 'msw-profile-data'
export const AutoKeyName = 'msw-profile-auto-key-idx'
type MSWProfileDataStruct = {
  [key: number]: Profile
}

const isServer = typeof window === 'undefined'

const { issueAutoKeyIndex } = AutoKeyGenerator(isServer, AutoKeyName)
const { loadDataFromStorage, saveDataToStorage } = JSONStorageGenerator<MSWProfileDataStruct>(isServer, DataStorageName)

export const GetMSWAllProfile = () => {
  return loadDataFromStorage()
}

export const GetMSWProfileById = (profileId: number) => {
  const datas = loadDataFromStorage()
  return datas[profileId]
}

export const UpdateMSWProfileById = (profileId: number, newData: Profile) => {
  const datas = loadDataFromStorage()
  datas[profileId] = Object.assign(datas[profileId] || {}, newData)
  saveDataToStorage(datas)
}

export const InsertMSWProfile = (newData: Omit<Profile, 'id'>) => {
  const idx = issueAutoKeyIndex()
  UpdateMSWProfileById(idx, { id: idx, ...newData })
  return idx
}

export const DeleteMSWProfileById = (profileId: number) => {
  const datas = loadDataFromStorage()
  delete datas[profileId]
  saveDataToStorage(datas)
}