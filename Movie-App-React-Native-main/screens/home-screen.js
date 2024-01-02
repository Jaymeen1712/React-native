import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline";
import { View, Text } from "react-native";
import { styles } from "../theme/index";

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2]);
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="mb-3">
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text className={styles.text}>M</Text>ovies
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
