import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  HeartIcon as HeartIconOutline,
} from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../theme";

const { width, height } = Dimensions.get("window"); 

const MovieScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const { params: item } = useRoute();

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    // api
  }, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-12">
          <TouchableOpacity
            className="rounded-xl p-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToggleFavorite}>
            {isFavorite ? (
              <HeartIcon size={35} color={theme.text} />
            ) : (
              <HeartIconOutline size={35} color={theme.text} />
            )}
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require("../assets/images/moviePoster2.png")}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={[
              "transparent",
              "rgba(23, 23, 23, 0.8)",
              "rgba(23, 23, 23, 1)",
            ]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
