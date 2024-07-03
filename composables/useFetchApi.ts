import { API_ROOT, API_CONFIG } from "../constants/API";
import { LOCAL_STORAGE } from "../constants/CONFIG";

import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useFetchApi<T>(url: string, options: UseFetchOptions<T> = {}, apiConfig: boolean = false) {
  const API_URL = apiConfig ? `${API_CONFIG}${url}` : `${API_ROOT}${url}`;
  const token = useCookie(LOCAL_STORAGE.AUTH_TOKEN);
  const defaults: UseFetchOptions<T> = {
    baseURL: API_URL,
    // cache request
    key: API_URL,

    // set user token if connected
    headers: token.value ? { Authorization: `Bearer ${token.value}` } : {},

    onResponse(_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    onResponseError(_ctx) {
      // throw new myBusinessError()
    },
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults);

  return useFetch(API_URL, params);
}
