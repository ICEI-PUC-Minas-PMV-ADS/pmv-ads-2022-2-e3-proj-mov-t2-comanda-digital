import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingHorizontal: 350,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  logoIcon: {
    width: 110,
    height: 20 
  }
})
