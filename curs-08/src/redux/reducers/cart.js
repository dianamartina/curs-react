const initialState = {
    products: []
  };

//   In reducer NU modificam state-ul primit ca parametru-> crapa aplicatia
export function cartReducer(state = initialState, action) { /* redux, altfel nu va stii  ce sa faca la primul claz */
    switch(action.type){
        case 'ADD_TO_CART' :
            const product = action.payload;
           
            const newState = {
                ...state,
                products: [...state.products, product]
            } /* cu aceasta scriere, nu am modificat state-ul initial, putem modifica, filter, map, reduce */

            return newState;
        case 'REMOVE_FROM_CART' :
                // hjsagfhgs
            break;
        default :
            return state;
    }
  };
  