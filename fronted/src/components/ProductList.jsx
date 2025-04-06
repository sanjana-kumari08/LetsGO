import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

 export const products = [
  { id: 1, name: "Book 1", price: 200 },
  { id: 2, name: "Book 2", price: 300 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name} - ₹{product.price}</h3>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
