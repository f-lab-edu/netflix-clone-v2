import MembershipInitData from './initData/membership.json'
import AutoKeyGenerator from './utils/AutoKeyGenerator'
import JSONStorageGenerator from './utils/JSONStorageGenerator'

export const DataStorageName = 'msw-membersihp-data'
export const AutoKeyName = 'msw-membersihp-auto-key-idx'
type MSWMembershipDataStruct = {
  [key: number]: MembershipPlans
}

const isServer = typeof window === 'undefined'

const { issueAutoKeyIndex } = AutoKeyGenerator(isServer, AutoKeyName)
const { loadDataFromStorage, saveDataToStorage } = JSONStorageGenerator<MSWMembershipDataStruct>(isServer, DataStorageName)

export const saveInitData = () => {
  const obj = {} as MSWMembershipDataStruct
  MembershipInitData.forEach((initObj) => {
    const tempObj = initObj as Omit<MembershipPlans, 'id'>
    const idx = issueAutoKeyIndex()
    const temp = { id: idx, ...tempObj }
    obj[idx] = temp
  })
  saveDataToStorage(obj)
  return obj
}

export const GetMSWMembershipById = (id: number) => {
  const allDataObj = loadDataFromStorage()
  return allDataObj[id]
}

export const GetMSWMembershipList = () => {
  const allDataObj = loadDataFromStorage()
  let list = Object.values(allDataObj)
  if (!list.length) {
    list = Object.values(saveInitData())
  }

  return list.sort((a, b) => a.sortOrder - b.sortOrder)
}
