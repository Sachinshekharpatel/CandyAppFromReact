import React,{useContext,useEffect} from 'react'
import CartContext from './createContext';
function Modal(props) {
  const cartCtx = useContext(CartContext);
  
  useEffect(()=>{
    console.log(cartCtx.candyCart)
  },[cartCtx,cartCtx.candyCart])

    return (
      <>
        {props.showModal && (
        <div className='modal' >
          <div  className='modal-content'>     
            <h2> Cart </h2>
            {cartCtx.candyCart.map((items)=>{
              return <div key={Math.random()} style={{display:'flex',justifyContent:'space-between'}}>
                <p> Name : {items.name}</p>
                <p> Price : {items.price} Rs</p>  
              </div>
            })}
            <h3>Total Price: {cartCtx.candyCart.reduce((sum, cur) => sum + Number(cur.price), 0)} Rs</h3>
            <button onClick={props.closeModal}>CloseModal</button>
            <button onClick={props.PlaceOrder}>PlaceOrder</button>
          </div>
        </div>
        )}
      </>
    )

}

export default Modal