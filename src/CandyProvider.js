import React, { useEffect, useState } from "react";
import CartContext from "./createContext";

const CartProvider = (props) => {
const [list,setList] = useState([]);  
const [totalItemInCart,setTotalItemInCart] = useState([]);
  const addItemToListHandler = (item) => {
    setList([...list,item]) 
  };

  const addItemCandyCartHandler = (item) => {
    setTotalItemInCart([...totalItemInCart,item])
    console.log(totalItemInCart)
  }

  const addtwoItems = (item) => {
    setTotalItemInCart([...totalItemInCart,item,item])
    console.log(totalItemInCart)
  }

  const addThreeItems = (item) => {
    setTotalItemInCart([...totalItemInCart,item,item,item])
    console.log(totalItemInCart)
  }

  const placeOrderHandler = () => {
    console.log('Inside PlaceOrderahndler')
    setTotalItemInCart([]);
  }

  useEffect(()=>{
    console.log(list);
    console.log(totalItemInCart)
  },[list.length,totalItemInCart])


  const cartContext = {
    items: list,
    candyCart: totalItemInCart,
    addItemInCart: addItemCandyCartHandler,
    addTwoItemsIncart:addtwoItems,
    addThreeItemsIncart:addThreeItems,
    addItemInList: addItemToListHandler,
    placeOrderFunction:placeOrderHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
