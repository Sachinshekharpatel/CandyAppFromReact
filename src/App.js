
import './App.css';
import React,{useState,useRef, useEffect} from 'react'

function App() {
  const [totalItemIncart, setTotalItemInCart] = useState(0)
  const [candyList, setCandyList] = useState([]);
  const [candyCart, setCandyCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const addCandy = () => {
    const name = nameRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const price = priceRef.current.value;

    if (name && description && price > 0) {
      const candy = {
        name: name,
        description: description,
        price: price,
        key:Math.random()  
      };
      setCandyList([...candyList, candy]);
      nameRef.current.value = '';
      descriptionRef.current.value = '';
      priceRef.current.value = '';
    }
  };

useEffect(()=>{
  console.log(candyCart)
},[candyList,candyCart])


const addOne = (items)=>{
  console.log('Inside add1')
  setCandyCart((prev) =>[...prev,items])
  const plusOne = totalItemIncart+1
  setTotalItemInCart(plusOne)
}
const addTwo = (items)=>{
  console.log('Inside add2')
  setCandyCart((prev) =>[...prev,items,items])
  const plusTwo = totalItemIncart+2
  setTotalItemInCart(plusTwo)
}
const addThree = (items)=>{
  console.log(' Inside addthree')
  setCandyCart((prev) =>[...prev,items,items,items])
  const plusThree = totalItemIncart+3
  setTotalItemInCart(plusThree)
}

const openModal = () => {
  setShowModal(true); 
};

const closeModal = () => {
  setShowModal(false); 
};

const PlaceOrder = () => {
  alert('Order Placed Keep Ordering Thank You')
  setCandyCart([])
  setShowModal(false); 
}
  return (
    <div className="App">
       <div style={{display:'flex',justifyContent:'space-between',marginBottom:'15px'}}>
            <header>Header Part</header>
            <button onClick={openModal}>Total Item In Cart : {candyCart.length}</button>
        </div>
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            
            <h2>Modal</h2>
            {candyCart.map((items)=>{
              return <div key={Math.random()} style={{display:'flex',justifyContent:'space-between'}} key={items.key}>
                <p> Name : {items.name}</p>
                <p> Price : {items.price} Rs</p>  
              </div>
            })}
            <h3>Total Price: {candyCart.reduce((acc, cur) => acc + Number(cur.price), 0)} Rs</h3>
            <button onClick={closeModal}>CloseModal</button>
            <button onClick={PlaceOrder}>PlaceOrder</button>
          </div>
        </div>
        )}
      <form type='submit'>
        <input ref={nameRef} type='text' placeholder='Candy Name'></input>
        <input ref={descriptionRef} type='text' placeholder='Description of Candy'></input>
        <input ref={priceRef} type='number' placeholder='Price'></input>
        <button type='button' onClick= {addCandy}>Add To list</button>
      </form>
     
      <div>
        <h1>Candy List</h1>
        {candyList.map((items)=>{
          return (<div key={items.key} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p> Name : {items.name}</p>
            <p> Description : {items.description}</p>         
            <p> Price : {items.price} Rs</p>  
            <button type='button' onClick={()=>addOne(items)}>Add One</button>
            <button type='button' onClick={()=>addTwo(items)}>Add Two</button>
            <button type='button' onClick={()=>addThree(items)}>Add Three</button>   
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
