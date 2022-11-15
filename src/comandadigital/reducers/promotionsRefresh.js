const promotionsRefresh = (state = {refreshing: false}, action) => {
    switch (action.type) {
      case 'SET_REFRESH_TRUE':
        return { refreshing: true }
      case 'SET_REFRESH_FALSE':
        return { refreshing: false }
      default:
        return state
    }
  }
  
  export default promotionsRefresh