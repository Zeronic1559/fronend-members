export interface ILoginResponse {
  access_token: string;
  user: User;
}

export interface User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  gender: string;
  lineid: string;
  banknumber: string;
  created_at: string;
  updated_at: string;
  status: string;
  bank_categories_id: number;
  ways_id: number;
  wallets_id: number;
  role: string;
  line_user_id: string;
  affiliate_id: any;
  rank: string;
  point: number;
  exp: string;
  dob: any;
  wallet: Wallet;
}

export interface Wallet {
  id: number;
  balance: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  turnover: number;
  point: number;
  promotionId: number;
  userPromotionId: number;
  depositTurnover: number;
  depositTurnoverCounter: number;
}

export interface ILoginServiceRequest {
  payload: {
    username: string;
    password: string;
    chanel: string;
    prefix: string;
  };
}

export interface ILoginServiceResponse {
  status: string;
  message?: string;
  item: ILoginResponse | null;
}
