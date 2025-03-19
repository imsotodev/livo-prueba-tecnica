import { create } from "zustand";

export type queryStoreProps = {
  category: number;
  page: number;
  limit: number;
  setCategory: (category: number) => void;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
};

export type queryProps = Pick<queryStoreProps, "category" | "limit" | "page">;

const queryStore = create<queryStoreProps>(() => ({
  category: 10,
  page: 1,
  limit: 10,
  setCategory: (category) => {
    queryStore.setState({ category });
  },
  setPage: (page) => {
    queryStore.setState({ page });
  },
  setLimit: (limit) => {
    queryStore.setState({ limit });
  },
}));

export default queryStore;
