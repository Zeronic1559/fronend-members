import { UserInfo } from "@/types/Auth";
import { Loyalty } from "@/types/Loyalty";
import { Affiliate } from "@/types/AFFILIATE";
export const useAuthUser = () => useState<UserInfo | null>("user", () => null);
export const useLoading = () => useState<boolean>("loading", () => true);
export const useLoyaltyInfo = () => useState<Loyalty | null>("loyalty", () => null);
export const useLoyaltyLoading = () => useState<boolean>("loyaltyLoading", () => true);
export const useAffiliateInfo = () => useState<Affiliate | null>("affiliate", () => null);
export const useLoginFocus = () => useState<boolean>("loginFocus", () => false);
