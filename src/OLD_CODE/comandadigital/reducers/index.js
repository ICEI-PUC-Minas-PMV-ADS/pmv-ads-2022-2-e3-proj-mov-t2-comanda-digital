import { combineReducers } from 'redux'
import promotions from './promotions'
import promotionPage from './promotionPage'
import promotionsRefresh from './promotionsRefresh'

export default combineReducers({
  promotions,
  promotionPage,
  promotionsRefresh
})
