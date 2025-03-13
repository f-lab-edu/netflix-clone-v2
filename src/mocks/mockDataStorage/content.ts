/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ContentInitData from './initData/content.json'
import AutoKeyGenerator from './utils/AutoKeyGenerator'
import JSONStorageGenerator from './utils/JSONStorageGenerator'

export const DataStorageName = 'msw-content-data'
export const AutoKeyName = 'msw-content-auto-key-idx'

type MSWContentDataStruct = {
  [key: number]: Content
}

const isServer = typeof window === 'undefined'

const { issueAutoKeyIndex } = AutoKeyGenerator(isServer, AutoKeyName)
const { loadDataFromStorage, saveDataToStorage } = JSONStorageGenerator<MSWContentDataStruct>(isServer, DataStorageName)

const filterAgeRestriction = (str: string): AgeRestriction => {
  switch (str) {
    case '18세관람가(청소년관람불가)': return 19
    case '12세관람가': return 12
    case '15세관람가':
    case '15세이상관람가':
      return 15
    case '전체관람가':
    default: return 0
  }
}

export const saveInitData = () => {
  const obj = {} as MSWContentDataStruct
  ContentInitData.forEach((initObj) => {
    const {
      // ignore data will be save as other storage
      genres, actors, rules, specific, series,
      ...tempObj
    } = initObj
    const idx = issueAutoKeyIndex()
    const temp = {
      id: idx,
      ...tempObj,
      ageRestriction: filterAgeRestriction(tempObj.ageRestriction),
      uploadDate: Number(tempObj.uploadDate)
    }

    obj[idx] = temp
  })
  saveDataToStorage(obj)
  return obj
}

export const GetMSWContentById = (id: number) => {
  const allDataObj = loadDataFromStorage()
  const content: ContentWithDetails = {
    ...allDataObj[id],
    rules: [],
    actors: [],
    series: [],
    genres: [],
    specific: [],
    playtime: 0
  }
  return content
}

export const GetMSWContentList = () => {
  const allDataObj = loadDataFromStorage()
  let list = Object.values(allDataObj)
  if (!list.length) {
    list = Object.values(saveInitData())
  }

  return list
}