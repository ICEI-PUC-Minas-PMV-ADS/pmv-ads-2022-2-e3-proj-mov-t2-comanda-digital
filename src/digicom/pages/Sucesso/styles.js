import { StyleSheet } from "react-native";
import Constants from "expo-constants";
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#000000",
  },
  header: {
    backgroundColor: "#980e03",
    marginBottom: 0,
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
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    margin: 5
  },
  priceText: {
    color: "#e73931",
    fontWeight: "bold",
    fontSize: 16,
    margin: 5
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
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  promotionImage:{
    width: '30%'
  },
  descriptionText: {
    flex: 1
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    backgroundColor: "black",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 55,
    width: '95%',
    minHeight: 200
  },
  centeredView: {
    flex: 1,
    backgroundColor: "#980e03",
    alignItems: "center",
    marginTop: 10
  },
  newOrder: {
    backgroundColor: "#E6641F",
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
