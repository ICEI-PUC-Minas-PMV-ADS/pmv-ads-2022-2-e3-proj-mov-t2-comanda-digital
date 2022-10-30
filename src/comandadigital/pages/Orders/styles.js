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
    backgroundColor: "#000000",
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
  order: {
    backgroundColor: "#E6641F",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    flex: 1,
    margin: 4,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  orderText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },

  newOrder: {
    backgroundColor: "#E6641F",
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
