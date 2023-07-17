import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableHighlight, Image, Alert } from "react-native";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../firebase/firebase";
import LoginStyle from "../styles/LoginStyle";
import { useDispatch } from "react-redux";
import { AddEmail } from "../store/slices/UserSlice";

const SignUp = () => {
  const navigation = useNavigation();
  const provider = new GoogleAuthProvider(app);
  const [Email, setEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const dispatch = useDispatch();
  const handle_login = ()=>{
    navigation.navigate("SignpUp");
    console.log("Login")
  }
  const handle_click = () => {
    if (Email === "" || Password === "") {
      alert("please enter all details");
      return;
    }
      signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        navigation.navigate("AppHome");
      const user = userCredential.user;
      // console.log(user);
      dispatch(AddEmail(user.email));
      })
    .catch((error) => {
      console.log(error);
      alert("Try again");
    });
  };
  return (
    <SafeAreaView className="w-full justify-center items-center h-screen flex-1 bg-[#a0cef6]">
            <View>
        <Text className="text-xl font-semibold">Login To continue</Text>
      </View>
      <View style={LoginStyle.InputCont}>
        <View style={LoginStyle.InputHeadCont}>
          <Image style={LoginStyle.ProfilePic} source={require("../images/user.png")}></Image>
        </View>
        <View style={LoginStyle.InputHeadCont}>
          <TextInput
            style={LoginStyle.InputHead1}
            onChangeText={setEmail}
            placeholder="Enter Your Email ID"
          />
        </View>
        <View style={LoginStyle.InputHeadCont}>
          <TextInput
            style={LoginStyle.InputHead1}
            onChangeText={SetPassword}
            placeholder="Enter Your Password"
          />
        </View>
        <View style={LoginStyle.InputHeadCont}>
          <TouchableHighlight>
            <View>
              <Text onPress={handle_click} style={LoginStyle.LoginButton}>
              {"Submit"}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View className="w-3/4 my-5 h-[1px] bg-black"></View>
      <View className ="font-bold">
        <Text>New to FoodApp ?<Text onPress={handle_login} className="text-blue-800 text-lg font-bold">Create Account</Text></Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp