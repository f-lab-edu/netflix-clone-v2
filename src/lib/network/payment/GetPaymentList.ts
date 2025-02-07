import type { GetPaymentMethodListResponseType } from '../types/payment';
import api from '..';

export const GetPaymentList = async () => {
  const result = await api.get<GetPaymentMethodListResponseType>('payment/registedList').json()
  return result
}