import React, { Component } from 'react'
import { FlatList,SafeAreaView } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'

import PromotionCard from './../PromotionCard'
import Styles from './styles'
import Header from './../Header'

import { 
  addPromotion, 
  pageIncrement, 
  pageBackToStart, 
  clearPromotions, 
  setRefreshTrue, 
  setRefreshFalse 
} from './../../actions'

class PromotionsList extends Component {
  constructor(props) {
    super(props)
  }
      

  request = () => {        
    axios.get(this.getApiURL(this.props)).then(response => { 
      response.data.forEach(element => {
        this.props.dispatch(setRefreshFalse)
        this.props.dispatch(addPromotion(element))
      })
    })
  }

  /**
   * Monta URL que realiza busca dos ítens de cardápio na API
   * @param {*} props 
   * @returns String contendo URL de pesquisa
   */
  getApiURL(props){ 
    var api_url = "https://fancy-boats-grow-201-92-251-245.loca.lt/produtos/"     
    const categoria = this.props.categoria
  
    if(categoria == "1"){
      api_url+="?categoria_id="+categoria
    }else{
      if(categoria == "2"){
        api_url+="?categoria_id="+categoria
      }else{
        if(categoria == "0"){
          api_url+="?categoria_id="+categoria
        }
      }
    }    
    return api_url
  }

  componentDidMount() {    
    this.request()
  }

  loadNewPage() {    
    this.props.dispatch(pageIncrement)
    this.request()
  }

  refresh() {    
    this.props.dispatch(setRefreshTrue)
    this.props.dispatch(clearPromotions)
    this.props.dispatch(pageBackToStart)
    this.request()
  }

  render() {    
    return(   
      <SafeAreaView>
        <Header/>
        <FlatList 
          style={ Styles.promotionsList }
          data={ this.props.promotions.data }        
          renderItem={ ({ item }) => (
            <PromotionCard data={ item } />
          )}
          keyExtractor={ item => item.id }
          onEndReachedThreshold={ 0.01 }
          onEndReached={ () => {
            this.loadNewPage()
          }}
          refreshing={ this.props.promotions.refreshing }
          onRefresh={ () => {
            this.refresh()
          }}
        />        
      </SafeAreaView>    
    )
  }
}

const mapStateToProps = (state) => {
    
  const  promotions = { 
    data: state.promotions,
    refreshing: state.promotionsRefresh.refreshing
  }
  return { promotions }
}

export default connect(mapStateToProps)(PromotionsList)
