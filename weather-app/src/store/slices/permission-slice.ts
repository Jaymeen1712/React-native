import { StateCreator } from "zustand";

export interface PermissionSlice {
  isLocationPermissionGranted: boolean;
  setIsLocationPermissionGranted: () => void;
}

export const createPermissionSlice: StateCreator<PermissionSlice> = (set, get) => ({
  isLocationPermissionGranted: false,
  setIsLocationPermissionGranted: () =>
    set({ isLocationPermissionGranted: !get().isLocationPermissionGranted }),
});
