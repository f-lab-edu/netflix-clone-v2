import type { ErrorResponse } from './error';

export type CreateProfileRequestType = {
  name: string
}
export type CreateProfileResponseType = {
  id: number
  isFirst: boolean
} & ErrorResponse

export type UpdateProfileRequestType = {
  id: number
  name: string
}
export type UpdateProfileResponseType = {
  result: boolean
} & ErrorResponse

export type GetProfileRequestPathType = {
  id: string
}
export type GetProfileResponseType = {
  profile: Profile
} & ErrorResponse

export type GetProfilesResponseType = {
  list: Profile[]
} & ErrorResponse

export type DeleteProfileRequestPathType = {
  id: string
}
export type DeleteProfileResponseType = {
  result: boolean
} & ErrorResponse
