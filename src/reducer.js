import { useStateValue } from "./Stateprovider";

export const initialState ={ 
    basket:[],
    user:null,
    id:null
};
//Selector 

const  reducer = (state,action) => {

switch(action.type){    


case 'ADD_TO_BASKET':
 return{
    
    ...state,
    basket : [...state.basket , action.item],

    
    
 };

case 'REMOVE_FROM_BASKET':
    const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
    );
   
    let newBasket = [...state.basket];

    if(index>=0){
        newBasket.splice(index,1);

    }

    else{
        console.warn(
            'Can t remove item because it does not exist in basket'
        )

    }


    return{
        ...state,   
        basket: newBasket
    }

    case 'SET_USER':
        return{
            ...state,
            user:action.name,
            id: action.id,
            basket:action.basket
        }


    case 'REM_USER':
        return{
            ...state,
            user:action.user,
            basket:[],
            id:action.id
        }

        
    default:
        return state;

}



} 



export default reducer;