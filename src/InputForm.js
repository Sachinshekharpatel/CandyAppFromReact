import React,{useRef,useContext} from "react";
import CartContext from './createContext.js';

function InputForm() {

    const cartCtx = useContext(CartContext);
    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    
    const addOne = (items) => {  
        cartCtx.addItemInCart(items);        
      }
    
      const addTwo = (item) => {
       cartCtx.addTwoItemsIncart(item);   
      }
    
      const addThree = (item) => {
        cartCtx.addThreeItemsIncart(item);
      }

    const addCandy = () => {
      const name = nameRef.current.value.trim();
      const description = descriptionRef.current.value.trim();
      const price = priceRef.current.value;
  
      if (name && description && price > 0) {
        const candy = {
          name: name,
          description: description,
          price: price,
          key: Math.random()  
        };
      

        cartCtx.addItemInList(candy);
        console.log('candyadded in list from inputComponent') 
        nameRef.current.value = '';
        descriptionRef.current.value = '';
        priceRef.current.value = '';
      }
    };

  return (
    <div>
      <form type="submit">
        <input ref={nameRef} type="text" placeholder="Candy Name"></input>
        <input
          ref={descriptionRef}
          type="text"
          placeholder="Description of Candy"
        ></input>
        <input ref={priceRef} type="number" placeholder="Price"></input>
        <button type="button" onClick={addCandy}>
          Add To list
        </button>
      </form>
      <div>
        <h1>Candy List</h1>
        <div>
        {cartCtx.items.map((items) => {
            return (
              <div key={items.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p> Name : {items.name}</p>
                <p> Description : {items.description}</p>
                <p> Price : {items.price} Rs</p>
                <button type='button' onClick={() => addOne(items)}>Add One</button>
                <button type='button' onClick={() => addTwo(items)}>Add Two</button>
                <button type='button' onClick={() => addThree(items)}>Add Three</button>
              </div>
            )
          })}
       </div>
      </div>
    </div>
  );
}

export default InputForm
