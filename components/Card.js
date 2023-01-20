import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
const Card = ({val}) => {
  return (
    <View className = "w-full h-[150px] flex-row rounded-2xl border-[1px] bg-slate-300 border-black">
      <Image source={{uri : val.image}} className ="rounded-2xl bg-cover object-cover border-[1px] border-black bg-center w-1/3 h-full"></Image>
      <View className = "w-2/3 text-center flex-col j items-center h-full">
      <Text className="text-black text-2xl">{val.data}</Text>
        <Text className="text-black">{val.text}</Text>
      </View>
    </View>
  );
};

export default Card;
