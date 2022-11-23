import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },

  description: {
    marginTop: 20,
    color: "#ffffff",
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
    marginTop: 40,
    width: 300,
    height: 60,
    backgroundColor: "#980e03",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 25,
  },
  image: {
    borderRadius: 15,
    marginBottom: 30,
  },
});
