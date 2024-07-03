import { API_AFF } from "@/constants/API";
import { useAuthUser, useAffiliateInfo } from "./state";
import { Loyalty } from "@/types/Loyalty";
export function useAffiliate() {
  const authUser = useAuthUser();
  const affiliate = useAffiliateInfo();

  const getInfo = async () => {
    if (authUser.value) {
      const { data } = await useFetch<Loyalty>(`${API_AFF}/agents/huay990/users/${authUser.value?.username}`);
      affiliate.value = data.value;
    }
  };

  const transfer = async () => {
    const payload = {
      agent: "huay990",
      username: authUser.value?.username,
      amount: affiliate.value?.totalPayback,
      nonce: Math.random(),
    };
    const data = await useFetch<Loyalty>(`${API_AFF}/transfers`, {
      method: "POST",
      body: payload,
    });
    return data;
  };

  return {
    getInfo,
    transfer,
  };
}
