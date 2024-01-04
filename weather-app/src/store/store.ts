import { create } from "zustand";
import { PermissionSlice, createPermissionSlice } from "./slices";

type StoreState = PermissionSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createPermissionSlice(...a),
}));
