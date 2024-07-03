import axios from "axios";
import { ILoginServiceRequest, ILoginServiceResponse } from "~/interface/login";

async function loginService(request: ILoginServiceRequest): Promise<ILoginServiceResponse> {
  const endpoint = `${useRuntimeConfig().public.api}/api/v3/auth/login`;

  try {
    const { data = {} } = await axios.post(endpoint, { ...request.payload });

    return {
      status: "success",
      item: {
        ...data.data,
        accessToken: data.access_token,
      },
    };
  } catch (e: any) {
    return {
      status: "error",
      message: e.response.data.message,
      item: null,
    };
  }
}

export default loginService;
