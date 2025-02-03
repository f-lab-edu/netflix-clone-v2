export type MembershipResponseType = {
  membership: MembershipPlans
}

export type MembershipListResponseType = {
  list: MembershipPlans[]
}

export type RegistMembershipRequest = {
  membership: MembershipPlanTier
}
export type RegistMembershipResponseType = {
  result: boolean
}
