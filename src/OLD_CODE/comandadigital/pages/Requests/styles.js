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
    backgroundColor: "#980e03",
    marginBottom: 5,
    borderRadius: 5,
  },
  headerButton: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
  },
  newOrder: {
    marginHorizontal: 90,
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#E6641F",
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
