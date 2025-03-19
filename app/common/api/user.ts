import type { APIResponse } from "../entity/user";
import http from "./config";

export const userData = async () => {
  const { data } = await http.get<APIResponse>("/account/data/");
  return data;
};
