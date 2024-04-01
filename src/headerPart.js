import React,{useContext} from "react";
import CartContext from "./createContext";
function HeaderPart(props) {

  const cartCtx = useContext(CartContext);
  

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <header>Header Part</header>
        <button onClick={props.openModal}>
          Total Item In Cart : {cartCtx.candyCart.length}
        </button>
      </div>
    </div>
  );
}

export default HeaderPart;
