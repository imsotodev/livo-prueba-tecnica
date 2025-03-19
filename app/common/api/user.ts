import http from "./config";

export const userData = async () => {
  const { data } = await http.get<APIResponse>("/account/data/");
  return data;
};

export interface APIResponse {
  account_id: string;
  seller_id: number;
  firstname: string;
  lastname: string;
  full_name: string;
  email: string;
  id_type: string;
  id_number: string;
  image_url: string;
  store: string;
  store_id: number;
  role: Role;
}

export interface Role {
  id: number;
  name: string;
  code: string;
}
