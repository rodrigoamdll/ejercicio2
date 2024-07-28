"use client";
import { useState } from "react";

const CartIcon = ({ countProducts, onToggle }) => (
  <div className="container-cart-icon" onClick={onToggle}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
      alt="carrito"
      className="icon-cart"
    />
    <div className="count-products">
      <span id="contador-productos">{countProducts}</span>
    </div>
  </div>
);

export default CartIcon;
