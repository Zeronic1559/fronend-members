import { API } from "@/constants/API";
import { useAuthUser, useLoading } from "./state";
import { ResponseUserInfo } from "@/types/Auth";
export function useAuth() {
  const authUser = useAuthUser();
  const loading = useLoading();
  const getUserProfile = async () => {
    const { data } = await useFetchApi<ResponseUserInfo>(API.MEMBER_GET_PROFILE);
    authUser.value = data.value?.data || null;
    loading.value = false;
  };

  return {
    getUserProfile,
  };
}
