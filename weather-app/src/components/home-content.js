import { View, Text } from "react-native";
import React from "react";

const HomeContent = () => {
  return (
    <View>
      <View className="flex-row items-baseline space-x-6 mx-4">
        <Text className="text-neutral-200 text-8xl">24°C</Text>
        <Text className="text-neutral-200 text-3xl">24° / 14°</Text>
      </View>
      <View className="mx-4 space-y-2 my-2">
        <Text className="text-neutral-400 text-xl ">WED, JANUARY 3</Text>
        <Text className="text-neutral-200 text-3xl font-bold">Ahmedabad</Text>
        <Text className="text-neutral-200 text-2xl font-bold">Smoke</Text>
      </View>
      <View className="mx-4 my-2">
        <Text className="text-neutral-400 text-xl">Tonight - Clear</Text>
      </View>
    </View>
  );
};

export default HomeContent;
