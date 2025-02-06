import type { CreateProfileRequestType, CreateProfileResponseType, DeleteProfileRequestPathType, DeleteProfileResponseType, GetProfileRequestPathType, GetProfileResponseType, GetProfilesResponseType, UpdateProfileRequestType, UpdateProfileResponseType } from '@/lib/network/types/profile';
import type { DefaultBodyType } from 'msw';
import { http } from 'msw';
import { ErrorCode, ErrorHandler } from '../middleware/ErrorHandler';
import { parseAuth } from '../middleware/token';
import { GetMSWAccountById, UpdateMSWAccountById } from '../mockDataStorage/account';
import { GetMSWProfileById, InsertMSWProfile, UpdateMSWProfileById } from '../mockDataStorage/profile';
import ErrorException from '../type/ErrorResponse';
import { createSuccessResponse } from '.';

const profileTemplate: Omit<Profile, 'id' | 'name' | 'email'> = {
  isLocked: false,
  pinCode: '',
  language: [],
  playerSetup: {
    autoNextPlay: false,
    autoPlayPreview: false,
    quality: 'UHD'
  },
  notifications: {
    email: false,
    push: false,
    sms: false
  },
  subtitleStyle: {
    backgroundColor: '',
    backgroundOpacity: 0,
    font: '',
    fontColor: '',
    fontSize: 14,
    shadow: false,
    shadowColor: '',
    shadowOffset: 0,
    shadowOpacity: 1,
    windowColor: '',
    windowOpacity: 1,
    windowRoundedCorner: 0
  },
  ageRestriction: {
    age: 0,
    limitByContent: [],
    isKid: false,
  }
}

const handlers = [
  http.put('/api/profile', ErrorHandler<
    CreateProfileRequestType,
    CreateProfileResponseType
  >(async ({ request }) => {
    const token = await parseAuth(request.headers)
    const accountInfo = GetMSWAccountById(token.payload.accountId)
    const newProfile: Omit<Profile, 'id'> = {
      ...profileTemplate,
      name: '',
      email: accountInfo.email
    }

    const id = InsertMSWProfile(newProfile)
    if (!accountInfo.defaultProfileId) {
      accountInfo.defaultProfileId = id
    }

    accountInfo.profileIds = accountInfo.profileIds ? [...accountInfo.profileIds, id] : [id]
    UpdateMSWAccountById(token.payload.accountId, accountInfo)

    return createSuccessResponse({ result: true })
  })),
  http.post('/api/profile', ErrorHandler<
    UpdateProfileRequestType,
    UpdateProfileResponseType
  >(async ({ request }) => {
    const newProfile = await request.json()
    const profile = GetMSWProfileById(newProfile.id)
    Object.assign(profile, newProfile)
    UpdateMSWProfileById(profile.id, profile)
    return createSuccessResponse({
      result: true
    })
  })),
  http.get('/api/profile/list', ErrorHandler<
    DefaultBodyType,
    GetProfilesResponseType
  >(async ({ request }) => {
    const token = await parseAuth(request.headers)
    const accountInfo = GetMSWAccountById(token.payload.accountId)
    const profileList = accountInfo.profileIds?.map(v => GetMSWProfileById(v)) || []
    return createSuccessResponse({
      list: profileList
    })
  })),
  http.get('/api/profile/:id', ErrorHandler<
    DefaultBodyType,
    GetProfileResponseType,
    GetProfileRequestPathType
  >(async ({ params }) => {
    const id = Number(params.id)
    const profile = GetMSWProfileById(id)
    return createSuccessResponse({
      profile: profile
    })
  })),
  http.delete('/api/profile/:id', ErrorHandler<
    DefaultBodyType,
    DeleteProfileResponseType,
    DeleteProfileRequestPathType
  >(async ({ request, params }) => {
    const id = Number(params.id)
    const token = await parseAuth(request.headers)
    const accountInfo = GetMSWAccountById(token.payload.accountId)
    if (accountInfo.defaultProfileId === id)
      throw new ErrorException('Can not delete default profile', ErrorCode.DISABLE_DELETE_DEFAULT_PROFILE)
    accountInfo.profileIds = (accountInfo.profileIds || []).filter(v => v !== id)
    UpdateMSWAccountById(token.payload.accountId, accountInfo)
    return createSuccessResponse({
      result: true
    })
  }))
]

export default handlers