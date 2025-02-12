import type { CreateProfileRequestType, CreateProfileResponseType } from '@/lib/network/types/profile';
import { useMutation } from '@tanstack/react-query';
import { CREATE_PROFILE_MUTATION_KEY } from '@/hooks/Query/keys/profile';
import CreateProfileApi from '@/lib/network/profile/CreateProfileApi';

export default function useInsertProfile(
  options?: CustomMutationOptions<CreateProfileRequestType, CreateProfileResponseType>
) {
  return useMutation({
    ...options,
    mutationFn: CreateProfileApi,
    mutationKey: CREATE_PROFILE_MUTATION_KEY
  })
}