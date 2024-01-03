import { Dimensions, Image, View } from "react-native";
import React from "react";

import Navbar from "../components/navbar";
import HomeContent from "../components/home-content";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-neutral-800">
      <Navbar />
      <View className="items-center my-6">
        <Image
          source={require("../assets/images/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds.jpg")}
          style={{ width: width * 0.95, height: height * 0.4 }}
          className="rounded-xl"
        />
      </View>
      <HomeContent />
    </View>
  );
};

export default HomeScreen;
