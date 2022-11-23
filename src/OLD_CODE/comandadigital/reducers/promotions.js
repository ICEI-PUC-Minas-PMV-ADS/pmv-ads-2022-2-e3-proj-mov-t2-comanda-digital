const promotions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROMOTION':
      return [
        ...state,
        {
          id: action.data.id,
          nome: action.data.nome,
          descricao:action.data.descricao,
          preco: action.data.preco,          
          imageUri: action.data.imageUri,
          linkUrl: action.data.linkUrl
        }
      ]
    case 'CLEAR_PROMOTIONS':
      return state = []
    default:
      return state
  }
}

export default promotions
