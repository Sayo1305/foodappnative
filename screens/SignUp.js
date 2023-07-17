import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableHighlight, Image, Alert } from "react-native";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../firebase/firebase";


const SignUp = () => {
  return (
    <SafeAreaView className="w-full h-screen flex-1 bg-[#3E5C76]">
      <View>
            <Text>djiodjd</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp