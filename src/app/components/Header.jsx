"use client";
import { useState } from "react";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

export const Headers = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  return (
    <header className="header">
      <h1>Jaguar Sport</h1>
      <div className="container-icon">
        <CartIcon countProducts={countProducts} onToggle={() => setActive(!active)} />
        <CartDropdown
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          setTotal={setTotal}
          active={active}
          onClose={() => setActive(false)} // Puedes usarlo si quieres cerrar el carrito con algún otro evento
        />
      </div>
    </header>
  );
};
