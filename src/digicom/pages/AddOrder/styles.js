import { StyleSheet } from "react-native";
import Constants from "expo-constants";
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight + 60,
    backgroundColor: "#000000",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
  priceText: {
    color: "#e73931",
    fontWeight: "bold",
    fontSize: 16,
    margin: 5
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    margin: 5
  },
});
