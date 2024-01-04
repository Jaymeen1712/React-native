import React from "react";
import { PermissionsAndroid } from "react-native";

import { useAppStore } from "../store";

const usePermission = () => {
  const { setIsLocationPermissionGranted } = useAppStore();

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setIsLocationPermissionGranted(true);
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return { requestLocationPermission };
};

export default usePermission;
