import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import AppStyles from "../styles/AppStyles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigate = useNavigation();
  const handle_click = () => {
    navigate.navigate('login');
  };
  const handle_skip = ()=>{
    navigate.navigate('AppHome');
  }
  return (
    <SafeAreaView className="w-full p-5 bg-[#129a71] relative h-screen flex-1 flex flex-col justify-center items-center">
      <Image
        style={AppStyles.HomeImage}
        source={require("../images/bibimbap.png")}
      ></Image>
      <View style={AppStyles.TextCont}>
        <View>
          <Text style={AppStyles.HomeHeadText}>{"Food App"}</Text>
        </View>
        <View>
          <Text style={AppStyles.HomeHeadDesc}>
            {
              "Ever since the on-demand food delivery business model has launched, it has completely revolutionized the traditional approach. As an on-demand food delivery application allows your customers to get delivered their ordered foods in the convenience of their home, office or whereever they are."
            }
          </Text>
        </View>
      </View>
      <View style={AppStyles.ButtonCont}>
        <Text style= {AppStyles.ButtonText} onPress = {handle_click}>{"Get Started"}</Text>
      </View>
      <Text className="absolute top-8 text-xl font-semibold right-10" onPress={handle_skip}>{"skip"}</Text>
    </SafeAreaView>
  );
};

export default Home;
