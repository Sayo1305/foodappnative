/** @format */

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";
import LoginStyle from "../styles/LoginStyle";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app, auth } from "../firebase/firebase";

const LogIn = () => {
  const provider = new GoogleAuthProvider(app);
  const navigation = useNavigation();
  const [Email, setEmail] = useState("");
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const handle_login = ()=>{
    navigation.navigate("SignpUp");
  }
  const handle_click = () => {
    if (Email === "" || Password === "" || Name === "") {
      alert("please enter all details");
      return;
    }
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("AppHome");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(error);
      });
  };
  const handle_signwithGoogle = async () => {
    // console.log(auth , app)
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <SafeAreaView style={LoginStyle.MainLoginCont}>
      <View>
        <Text className="text-xl font-semibold">Create Your Profile</Text>
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
            onChangeText={SetName}
            placeholder="Enter Your Name"
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
      <View className="w-2/3 my-5">
        <View
          onTouchStart={handle_signwithGoogle}
          className=" w-full py-1 px-3 bg-contain  flex flex-row items-center justify-start gap-5 rounded-md"
        >
          <View>
            <Image className="w-[30px] h-[30px]" source={require("../images/google.png")}></Image>
          </View>
          <View>
            <Text className="font-semibold">Authenticate with Google</Text>
          </View>
        </View>
      </View>
      <View className ="font-bold">
        <Text>Already have an account? <Text onPress={handle_login} className="text-blue-800 text-lg font-bold">Login</Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
