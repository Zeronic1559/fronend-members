import { API_LOYALTY } from "@/constants/API";
import { useLoyaltyInfo, useAuthUser, useLoyaltyLoading } from "./state";
import { Loyalty } from "@/types/Loyalty";
export function useLoyalty() {
  const authUser = useAuthUser();
  const loyaltyInfo = useLoyaltyInfo();

  const getInfo = async () => {
    if (authUser.value) {
      const { data } = await useFetch<Loyalty>(`${API_LOYALTY}/agents/huay990/users/${authUser.value?.username}`);
      loyaltyInfo.value = data.value;
    }
  };

  const transfer = async (amount: number, username: string) => {
    const payload = {
      agent: "huay990",
      username: authUser.value?.username,
      amount: loyaltyInfo.value?.totalPayback,
      nonce: Math.random(),
    };
    const data = await useFetch<Loyalty>(`${API_LOYALTY}/transfers`, {
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
