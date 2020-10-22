export const initialState = {
    beers: [],
    favourites:[],
    // user: null,
    query:false,
    test:1
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
   
    switch (action.type) {
        case "ADD_BEERS":
            return {
              ...state,
              beers: [...state.beers, ...action.item],
            };
            case "ADD_SEARCH_RES":
              return {
                ...state,
                beers: [ ...action.item],
              }; 
              case "SET_QUERY":
                return {
                  ...state,
                 query:!state.query
                };    
      // case "ADD_TO_FAVOURITE":
      //   return {
      //     ...state,
      //     favourites: [...state.favourites, action.item],
      //   };
      
      // case 'EMPTY_BASKET':
      //   return {
      //     ...state,
      //     basket: []
      //   }
  
      case "FAVOURITE":
        const index = state.favourites.findIndex(
          (favouriteItem) => favouriteItem.id === action.item.id
        );
        let newFavourites = [...state.favourites];
  
        if (index >= 0) {
          newFavourites.splice(index, 1);

  
        } else {
        newFavourites.push(action.item)
        }
  
        return {
          ...state,
          favourites: newFavourites
        }
      
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;