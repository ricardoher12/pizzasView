function pizzaReducer(state, action) {
  function updateFavorite(favoriteValue) {
    return state.pizzaList.map((item) => {
      if (item.id === action.id) {
        return { ...item, favorite: favoriteValue };
      }
      return item;
    });
  }

  function modifyComponent(pizzaRec) {
    return state.pizzaList.map((item) => {
      if (item.id === pizzaRec.id) {
        return pizzaRec;
      }
      return item;
    });
  }

  switch (action.type) {
    case 'setPizzaList': {
      return { ...state, pizzaList: action.data, isLoading: false };
    }
    case 'favorite': {
      return { ...state, pizzaList: updateFavorite(true) };
    }
    case 'unfavorite': {
      return { ...state, pizzaList: updateFavorite(false) };
    }
    case 'modify': {
      return { ...state, pizzaList: modifyComponent(action.pizzaRec) };
    }
    default:
      return state;
  }
}
export default pizzaReducer;
