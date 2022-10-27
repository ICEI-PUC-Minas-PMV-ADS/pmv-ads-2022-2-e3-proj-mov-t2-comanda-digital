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
  order: {
    backgroundColor: "#fda430",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    flex: 1,
    margin: 4,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  orderText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },

  newOrder: {
    backgroundColor: "#005390",
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
