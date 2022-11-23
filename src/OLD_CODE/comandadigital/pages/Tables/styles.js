import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight + 60,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: '#005390',
    marginBottom: 20,
    height: 50,
    color: "#ffffff",
  },
  item: {
    backgroundColor: "#E6641F",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    flex: 1,
    margin: 4,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  itemText: {
    color: "#ffffff",
    fontSize: 23,
  },
});
