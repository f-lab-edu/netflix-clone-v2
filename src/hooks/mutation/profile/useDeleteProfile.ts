import type { DeleteProfileResponseType } from '@/lib/network/types/profile';
import { useMutation } from '@tanstack/react-query';
import { DELETE_PROFILE_MUTATION_KEY } from '@/hooks/Query/keys/profile';
import DeleteProfileApi from '@/lib/network/profile/DeleteProfileApi';

export default function useDeleteProfile(
  id: number,
  options?: CustomMutationOptions<object, DeleteProfileResponseType>
) {
  return useMutation({
    ...options,
    mutationFn: () => DeleteProfileApi(id),
    mutationKey: DELETE_PROFILE_MUTATION_KEY(id)
  })
}