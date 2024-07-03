export enum API {
  LOGIN = "/login",
  MEMBER_BANK_DEPOSIT = "/member/bank/deposit",
  MEMBER_DEPOSIT_TRUEGIFT = "/api/vx/deposit/truegift",
  MEMBER_LOGIN = "/api/v3/auth/login",
  MEMBER_CHECK_IN = "/api/v3/checkin",
  MEMBER_CHECK_IN_REWARD = "/api/v3/checkin/rewards",
  MEMBER_CHECK_IN_REMAINING = "/api/v3/checkin/remaining",
  MEMBER_GET_PROFILE = "/api/v3/account",
  MEMBER_GET_CREDIT_FREE = "/api/vx/wallet/credit",
  MEMBER_HISTORY = "/api/vx/wallet/transactions",
  MEMBER_WITHDRAW = "/api/v1/wallet/withdraw",
  GAME_PROVIDER = "/api/v3/providers",
  GAME_PROVIDER_BY_ID = "/api/vx/provider/",
  GAME_LIST_BY_PROVIDER = "/api/vx/providers",
  PROMOTION = "/api/v3/promotions",
  REGISTER = "/api/vx/register",
  REWARD_ANGPAO = "/api/v3/angpao",
  PLAY_ANGPAO = "/api/v3/angpao/spin",
  REWARD_ANGPAO_HISTORY = "/api/v3/angpao/history",


  REWARD_SPIN = "/api/v3/wheel",
  REWARD_SPIN_HISTORY = "/api/v3/wheel/history",
  PLAY_SPIN = "/api/v3/wheel/spin",
}

export const API_ROOT: string = "https://apih990.rinbeer.com";
export const API_LOYALTY: string = "https://loyaff-prod.yaymoy.com/loy";
export const API_AFF: string = "https://loyaff-prod.yaymoy.com/aff";
export const API_CONFIG: string = "https://admin-apih990.rinbeer.com";

export const API_PRIZE: string = "https://meslot-api.m2g.dev/huayapi";
export const API_PRIZE_YEE_KEE: string = "https://meslot-api.m2g.dev/huayapi/yeekee";
