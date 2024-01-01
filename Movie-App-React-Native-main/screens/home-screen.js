import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline";
import { View } from "react-native";

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2]);
  return (
    <View classname="flex-1 bg-neutral-800">
      <SafeAreaView classname="mb-3">
        <StatusBar style="light" />
        <View classname="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
