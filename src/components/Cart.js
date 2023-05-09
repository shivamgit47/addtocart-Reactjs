import React, { createContext, useEffect, useReducer } from 'react';
import "./cart.css";
import { products } from './Products';
import ContextCart from './ContextCart';
import   reducer   from './reducer';


const CartContext = createContext();
const intialState={
    item : products,
    totalAmount : 0,    
    totalItem: 0,
};

const Cart = () => {
    
    // const[item,setitem]=useState(products);
    const [state, dispatch] = useReducer(reducer,intialState);
    const removeItem=(id)=>{

        return dispatch({
          type : "REMOVE_ITEM",
          payload : id
        })
    };
    // clear the cart
    const clearCart=()=>{
      return dispatch({
          type : "CLEAR_ITEM"
      })
    };

    // for increment
    const increment=(id)=>{
      return dispatch({
        type : "INCREMENT",
        payload : id
      })
    };
    const decrement=(id)=>{
      return dispatch({
        type : "DECREMENT",
        payload : id,
      })
    };
    useEffect(()=>{
      dispatch({type : "GET_TOTAL"},{type : "GET_AMOUNT"});
    },[state.item]);
  return (
    <>
    <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
        <ContextCart/>
    </CartContext.Provider>
    
    </>
  )
}

export default Cart;
export { CartContext };