import AutoKeyGenerator from './utils/AutoKeyGenerator'
import JSONStorageGenerator from './utils/JSONStorageGenerator'

export const DataStorageName = 'msw-membersihp-data'
export const AutoKeyName = 'msw-membersihp-auto-key-idx'
type MSWMembershipDataStruct = {
  [key: number]: MembershipPlans
}

const initData: Omit<MembershipPlans, 'id'>[] = [
  {
    ads: true,
    plan: 'adsStandard',
    maxContentResolution: 'FHD',
    maxWatcherCount: 2,
    price: 5500,
    saveAllowedDeviceNumber: 2,
    device: ['tv', 'computer', 'mobile', 'tablet'],
    sortOrder: 1000
  },
  {
    ads: false,
    plan: 'standard',
    maxContentResolution: 'FHD',
    maxWatcherCount: 2,
    price: 13500,
    saveAllowedDeviceNumber: 2,
    device: ['tv', 'computer', 'mobile', 'tablet'],
    sortOrder: 2000
  },
  {
    ads: false,
    plan: 'premium',
    maxContentResolution: 'UHD',
    maxWatcherCount: 4,
    price: 17000,
    saveAllowedDeviceNumber: 6,
    device: ['tv', 'computer', 'mobile', 'tablet'],
    soundQuality: 'immersive',
    sortOrder: 3000
  }
]

const isServer = typeof window === 'undefined'

const { issueAutoKeyIndex } = AutoKeyGenerator(isServer, AutoKeyName)
const { loadDataFromStorage, saveDataToStorage } = JSONStorageGenerator<MSWMembershipDataStruct>(isServer, DataStorageName)

export const saveInitData = () => {
  const obj = {} as MSWMembershipDataStruct
  initData.forEach((initObj) => {
    const idx = issueAutoKeyIndex()
    const temp = { id: idx, ...initObj }
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