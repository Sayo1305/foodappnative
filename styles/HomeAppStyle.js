import { StyleSheet } from "react-native";

export default StyleSheet.create({
  HomeAppMainCont: {
    flex: 1,
    backgroundColor: "#ffd166",
  },
  ScrollCont: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ScrollContReal: {
    flex: 1,
    padding : 10,
  },
  HomeAppMainImageCont: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  NavbarCont: {
    flex: 0.1,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HomeAppMainImage: {
    padding: 10,
    width: 200,
    height: 200,
    flex: 1,
    resizeMode: "contain",
  },
  HomeAppProfileImage: {
    width: 40,
    padding: 10,
    height: 40,
  },
  FilterNav: {
    position: "absolute",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: 5,
  },
  FilterNavCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexWrap: "wrap",
    flex: 1,
  },
  FilterText: {
    alignSelf: "stretch",
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
  },
  FilterOuterCont: {
    padding: 5,
  },
});
