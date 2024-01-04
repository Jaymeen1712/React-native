import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  Button,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Geolocation from "react-native-geolocation-service";

export default function App() {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Location permission granted");
        getCurrentLocation();
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Current position:", position);
      },
      (error) => {
        console.error("Error getting location:", error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    console.log("🚀 ~ file: App.js:39 ~ getCurrentLocation ~ navigator.geolocation:", navigator.geolocation)
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Press me" onPress={requestLocationPermission} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
