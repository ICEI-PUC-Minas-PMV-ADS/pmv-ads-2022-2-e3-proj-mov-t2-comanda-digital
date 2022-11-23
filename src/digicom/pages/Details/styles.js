import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight + 60,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#005390",
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
    marginHorizontal: 100,
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#005390",
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
