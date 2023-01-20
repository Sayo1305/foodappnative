import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableHighlight, Image, Alert } from "react-native";
import LoginStyle from "../styles/LoginStyle";
const LogIn = () => {
  const navigate = useNavigation();
  const [Email, setEmail] = useState("");
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const handle_click = ()=>{
    Email != "" && Name != "" && Password != ""  ? navigate.navigate('AppHome') : Alert.alert("Enter your info please");
  }
  return (
    <SafeAreaView style={LoginStyle.MainLoginCont}>
        <View style={LoginStyle.InputCont}>
        <View style={LoginStyle.InputHeadCont}>
          <Image style = {LoginStyle.ProfilePic} source={require('../images/user.png')}>
          </Image>
          </View>
          <View style={LoginStyle.InputHeadCont}>
            <Text>{"Create your Profile"}</Text>
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
                <Text onPress={handle_click} style = {LoginStyle.LoginButton}>{"Submit"}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default LogIn;
