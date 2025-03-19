import type { MyInfoResponseType } from '@/lib/network/types/account';
import type { CreateProfileRequestType, CreateProfileResponseType } from '@/lib/network/types/profile';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CREATE_PROFILE_MUTATION_KEY } from '@/hooks/Query/keys/profile';
import CreateProfileApi from '@/lib/network/profile/CreateProfileApi';
import { MY_INFO_QUERY_KEY } from '@/lib/react-query/keys/account';

export default function useInsertProfile(
  options?: CustomMutationOptions<CreateProfileRequestType, CreateProfileResponseType>
) {
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: CreateProfileApi,
    mutationKey: CREATE_PROFILE_MUTATION_KEY,
    onSettled(result, error) {
      if (error) return
      if (!result) return
      const accountData = queryClient.getQueryData<MyInfoResponseType>(MY_INFO_QUERY_KEY)
      if (accountData) {
        if (result.isFirst) {
          accountData.accountInfo.defaultProfileId = result.id
        }
        accountData.accountInfo.profileIds = [...accountData.accountInfo.profileIds ?? [], result.id]
        queryClient.setQueryData(MY_INFO_QUERY_KEY, accountData)
      }
    }
  })
}
