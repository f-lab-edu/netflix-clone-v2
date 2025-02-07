import type { ErrorResponse } from './error';

export type RegistPaymentMethodRequestType = {
  paymentMethod: Omit<PaymentMethod, 'accountId' | 'id'>
  policies?: Partial<PaymentMethodPolicies>
  membershipTier?: MembershipPlanTier
}
export type RegistPaymentMethodResponseType = {
  result: boolean
} & ErrorResponse

export type GetPaymentMethodListResponseType = {
  result: PaymentMethod[]
}
