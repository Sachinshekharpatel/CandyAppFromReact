import React from 'react'
const CartContext = React.createContext({
  items:[],
  candyCart:[],
  addItemInCart:(item)=>{},
  addTwoItemsIncart:(item)=>{},
  addThreeItemsIncart:(item)=>{},
  addItemInList:(item)=>{},
  placeOrderFunction:()=>{}
})

export default CartContext 