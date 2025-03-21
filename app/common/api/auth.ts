import type { SigninSchema } from "~/features/auth/schemas/SigninFormSchema";
import http from "./config";
import type { AxiosError } from "axios";
import type { APIResponse } from "../entity/auth";

export const signin = async (userdata: SigninSchema) => {
  try {
    const { data } = await http.post<APIResponse>("/account/login/", userdata);
    localStorage.setItem("access-token", data.token);
    return data;
  } catch (error) {
    return error as AxiosError;
  }
};

export const signout = async () => {
  try {
    const { data } = await http.post("/account/logout/");
    return data;
  } catch (error) {
    return error as AxiosError;
  }
};
