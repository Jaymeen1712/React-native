import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShareIcon, Bars3Icon } from "react-native-heroicons/outline";

const Navbar = () => {
  return (
    <SafeAreaView className="flex-row justify-between mx-4 items-center">
      <Text className="text-white text-2xl">Good Morning</Text>
      <View className="flex-row space-x-6 items-center">
        <ShareIcon size={25} strokeWidth={2} color="white" />
        <Bars3Icon size={30} strokeWidth={2} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
