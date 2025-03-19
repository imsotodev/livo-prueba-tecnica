import type { SigninSchema } from "~/features/auth/schemas/SigninFormSchema";
import http from "./config";
import type { AxiosError } from "axios";

export const signin = async (userdata: SigninSchema) => {
  try {
    const { data } = await http.post<APIResponse>("/account/login/", userdata);
    localStorage.setItem("access-token", data.token);
    return data;
  } catch (error) {
    return error as AxiosError;
  }
};

export type APIResponse = {
  token: string;
  user_id: string;
};
