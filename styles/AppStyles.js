import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex  : 1,
    padding: 20,
    backgroundColor : '#129a71',
    justifyContent : "center",
    alignItems :"center",
    flexDirection : "column",
  },
  HomeImage: {
    flex: 0.5,
    width: 200,
    justifyContent : "center",
    alignItems  : "center",
    height: 200,
    resizeMode: 'contain'
  },
  TextCont:{
    justifyContent : "center",
    alignItems : "center",
  },
  ButtonCont:{
    justifyContent : "center",
    flexDirection : "column",
    alignItems : "center",
    padding :15,
  },
  HomeContBottom: {
    width: "100%",
    borderTopRightRadius : "30px",
    borderTopLeftRadius : "30px",
    height: "45vh",
    position: "absolute",
    bottom: "0px",
  },
  HomeHeadText: {
    fontSize : 30,
    fontWeight : '800',
    color : '#fff',
  },
  HomeHeadDesc: {
    fontSize : 13,
    textAlign : 'justify',
    color : '#fff',
  },
  ButtonSkipText : {
    padding : 10,
    fontSize  : 20,
  },
  ButtonText: {
    fontWeight: "500",
    color : "#000",
    fontSize: 15,
    padding : 10,
    textAlign : 'center',
    width : 250,
    borderColor : "#000",
    borderWidth : 1,
    borderRadius : 10,
    backgroundColor : "#fff",
    shadowColor: "#fff",
  },
});
