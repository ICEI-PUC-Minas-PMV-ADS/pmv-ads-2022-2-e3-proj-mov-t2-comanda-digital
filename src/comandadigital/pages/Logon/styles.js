import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 60,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },

  description: {
    marginTop: 20,
    color: "#737380",
  },
  input: {
    marginTop: 20,
    margin: 10,
    width: 300,
    height: 60,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#ddd",
    paddingLeft: 15,
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    width: 300,
    height: 60,
    backgroundColor: "#005390",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    fontSize: 16,
  },
});
