
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/CartSlice";
import About from "../Footer/About";

function Cart() {
  const { totalAmount } = useSelector((state) => state.cart);

   const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="mt-10 text-center text-4xl font-extrabold">Cart</h2>

      <span><img className="ml-45 mt-40 md:ml-150" src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png"></img></span>

      {cartItems.length === 0 ? <p className="text-center mt-20 text-[24px] "> Your Cart is empty 🥲: 0  <br/> 
      <p className="text-[18px]"> Looks like you haven't added any books to your cart yet.
      </p></p> : null}

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3 className="flex flex-col justify-center items-center mt-7" >{item.name} - ₹{item.price}</h3>
          <button  className="ml-10"  onClick={() => dispatch(removeFromCart(item))}>
            Remove
          </button>
        </div>
      ))}


      { totalAmount> 0 && (
                <h3 className="text-center mt-5 text-[24px]"
                >Total Price: ₹{totalAmount}</h3>

      )}

       
<About/>


    </>
  );
}

export default Cart;

