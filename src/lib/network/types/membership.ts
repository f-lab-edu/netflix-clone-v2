export type GetMembershipListResponseType = {
  list: MembershipPlans[]
}

export type RegistMembershipRequest = {
  membership: MembershipPlanTier
}
export type RegistMembershipResponseType = {
  result: boolean
}
