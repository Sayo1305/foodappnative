import { StyleSheet } from "react-native";

export default StyleSheet.create({
      LoginCont : {
            flex : 1,
      },
      MainLoginCont : {
            flex : 1,
            backgroundColor : "#03C988"
      },
      InputCont : {
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
            padding: 30,
      },
      InputHeadCont :{
            padding : 5,
      },
      ProfilePic: {
            width  : 100, 
            height : 100,
      },
      InputHead1 :{
            borderColor : "#000",
            padding : 5,
            width : 250,
            borderRadius: 5,
            borderWidth : 1,
      },
      ButtonContainer : {
            flexDirection : "row",
            justifyContent : "center",
            alignItems : "center",
      },
      LoginButton: {
            borderColor : "#000",
            borderWidth : 1,
            width : 100,
            padding : 10,
            borderRadius : 10,
            textAlign : "center",
            backgroundColor : "rgb(255, 188, 1)",
            color : "#000",
      },
});