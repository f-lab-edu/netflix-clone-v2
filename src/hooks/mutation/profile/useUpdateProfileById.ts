import type { UpdateProfileRequestType } from '@/lib/network/types/profile';
import { useMutation } from '@tanstack/react-query';
import { UPDATE_PROFILE_MUTATION_KEY } from '@/hooks/Query/keys/profile';
import UpdateProfileApi from '@/lib/network/profile/UpdateProfileApi';

export default function useUpdateProfile(profile: UpdateProfileRequestType) {
  return useMutation({
    mutationFn: () => UpdateProfileApi(profile),
    mutationKey: UPDATE_PROFILE_MUTATION_KEY(profile.id)
  })
}