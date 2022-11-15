import React, { Component } from 'react'
import { View } from 'react-native'
import Styles from './styles'
import PromotionFormSearch from '../PromotionFormSearch'

class Header extends Component {
  render() {
    return(
      <View style={ Styles.sectionHeader }>        
        <PromotionFormSearch />
      </View>
    )
  }
}

export default Header