import React, { Component } from 'react'
import { View, Modal, Text, TextInput, TouchableHighlight, Image } from 'react-native'
import Styles from './styles'

const SearchIcon = require('./../../assets/search.png')

class PromotionFormSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { modalVisible: false }
  }
  
  render() {
    return(
      <View>
        <Modal
          animationType="slide"
          transparent={ true }
          visible={ this.state.modalVisible }
          onRequestClose={() => {
            this.setState({ modalVisible: false })
          }}
        >
          <View style={ Styles.centeredView }>
            <View style={ Styles.modalView }>
              <TextInput
                style={ Styles.searchInput }
                onChangeText={ () => { return false } }
                placeholder='Procurar'
              />
              <TouchableHighlight
                style={ Styles.closeButton }
                onPress={() => {
                  this.setState({ modalVisible: false })
                }}
              >
                <Text style={ Styles.textStyle }>Cancelar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setState({ modalVisible: true })
          }}
        >
          <Image source={ SearchIcon } style={ Styles.searchIcon } />
        </TouchableHighlight>
      </View>
    )
  }
}

export default PromotionFormSearch