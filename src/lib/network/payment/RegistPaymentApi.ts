import type { RegistPaymentMethodRequestType, RegistPaymentMethodResponseType } from '../types/payment';
import api from '..';

export const RegistPaymentApi = async (params: RegistPaymentMethodRequestType) => {
  const result = await api.post<RegistPaymentMethodResponseType>('payment/regist', {
    json: params
  }).json()
  return result
}