import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home-screen";
import usePermission from "../hooks/usePermission";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { requestLocationPermission } = usePermission();

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
