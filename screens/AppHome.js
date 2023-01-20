import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import HeroX from "../components/HeroX";
import CaroselData from "../data/imagestore";

const AppHome = () => {
  return (
    <SafeAreaView className="my-7 w-full h-auto bg-slate-200">
      <View className="p-2 flex flex-row justify-between items-center border-[1px] border-black bg-slate-300">
        <View className="flex items-center justify-center text-center">
          <View>
            <View>
              <Text className="text-blue-500 font-extrabold text-md">
                Welcome!
              </Text>
            </View>
            <View>
              <Text>Unnat</Text>
            </View>
          </View>
        </View>
        <View className="h-[50px] border-[1px] rounded-lg border-black bg-blue-100 w-[200px] flex-row flex justify-center items-center">
          <TextInput
            className="p-1 text-red-800"
            placeholder="Search Hotel or Food"
          ></TextInput>
          <View>
            <Image
              source={require("../images/search.png")}
              className="w-5 h-5"
            ></Image>
          </View>
        </View>
        <View className="">
          <Image
            className="h-10 w-10"
            source={require("../images/user.png")}
          ></Image>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <HeroX />
        <View className="bg-[#FA7070] border-[1px] my-2 border-black w-full h-auto p-2">
          <View>
            <Text className="font-bold text-white text-xl">Fast Food 🍔 </Text>
          </View>
          <View className="w-full h-auto flex-col">
            {CaroselData.map((val, idx) => (
              <View key={idx} className="p-2">
                <Card val={val} />
              </View>
            ))}
          </View>
        </View>
        <View className="bg-[#FA7070] border-[1px] my-2 border-black w-full h-auto p-2">
          <View>
            <Text className="font-bold text-white text-xl">Fast Food 🍔 </Text>
          </View>
          <View className="w-full h-auto flex-col">
            {CaroselData.map((val, idx) => (
              <View key={idx} className="p-2">
                <Card val={val} />
              </View>
            ))}
          </View>
        </View>
        <View className="bg-[#FA7070] border-[1px] my-2 border-black w-full h-auto p-2">
          <View>
            <Text className="font-bold text-white text-xl">Fast Food 🍔 </Text>
          </View>
          <View className="w-full h-auto flex-col">
            {CaroselData.map((val, idx) => (
              <View key={idx} className="p-2">
                <Card val={val} />
              </View>
            ))}
          </View>
        </View>
        <View className="bg-[#FA7070] border-[1px] my-2 border-black w-full h-auto p-2">
          <View>
            <Text className="font-bold text-white text-xl">Fast Food 🍔 </Text>
          </View>
          <View className="w-full h-auto flex-col">
            {CaroselData.map((val, idx) => (
              <View key={idx} className="p-2">
                <Card val={val} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default AppHome;
