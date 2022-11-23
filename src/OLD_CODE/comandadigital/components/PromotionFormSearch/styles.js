import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  searchIcon: {
    width: 20,
    height: 20
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
  },
  modalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '94%',
    height: 60
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 15,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  searchInput: { 
    height: 40,
    width: "75%",
    borderColor: "#ECEFF1",
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 5
  }
})