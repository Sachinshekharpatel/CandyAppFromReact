import React, { useState, useEffect, useContext } from 'react';
import Modal from './modal';
import HeaderPart from './headerPart.js';
import InputForm from './InputForm.js';
import CartContext from './createContext.js';
function App() {
  const cartCtx = useContext(CartContext)

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
    useEffect(()=>{
      console.log(cartCtx.items)
    },[cartCtx])

  const PlaceOrder = () => {
    alert('Order Placed Keep Ordering Thank You')
    cartCtx.placeOrderFunction();
    setShowModal(false);
  }

  return (
    <>
      <div className="App">
      <HeaderPart openModal={openModal} ></HeaderPart>
        <Modal showModal={showModal} closeModal={closeModal} PlaceOrder={PlaceOrder}></Modal>  
      <InputForm addCandy={openModal}></InputForm>    
      </div>
    </>
  );
}

export default App;
