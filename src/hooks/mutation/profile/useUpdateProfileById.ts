import type { UpdateProfileRequestType, UpdateProfileResponseType } from '@/lib/network/types/profile';
import { useMutation } from '@tanstack/react-query';
import { UPDATE_PROFILE_MUTATION_KEY } from '@/hooks/Query/keys/profile';
import UpdateProfileApi from '@/lib/network/profile/UpdateProfileApi';

export default function useUpdateProfile(
  profile: UpdateProfileRequestType,
  options?: CustomMutationOptions<UpdateProfileRequestType, UpdateProfileResponseType>) {
  return useMutation({
    ...options,
    mutationFn: UpdateProfileApi,
    mutationKey: UPDATE_PROFILE_MUTATION_KEY(profile.id),
  })
}
