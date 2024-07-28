"use client";

const CartDropdown = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  active,
  onClose
}) => {
  const onDeleteProduct = (product) => {
    if (window.confirm("¿Seguro que quieres eliminar el producto?")) {
      const results = allProducts.filter((item) => item.id !== product.id);
      setTotal(total - product.price * product.quantity);
      setCountProducts(countProducts - product.quantity);
      setAllProducts(results);
    }
  };

  const onCleanCart = () => {
    if (window.confirm("¿Seguro que quieres vaciar el carrito de compras?")) {
      setAllProducts([]);
      setTotal(0);
      setCountProducts(0);
    }
  };

  const onQuantityChange = (product, newQuantity) => {
    const updatedProducts = allProducts.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    );
    setAllProducts(updatedProducts);

    const newTotal = updatedProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const newCount = updatedProducts.reduce((acc, item) => acc + item.quantity, 0);
    setTotal(newTotal);
    setCountProducts(newCount);
  };

  return (
    <div className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
      {allProducts.length ? (
        <>
          <div className="row-product">
            {allProducts.map((product) => (
              <div className="cart-product" key={product.id}>
                <div className="info-cart-product">
                  <img
                    src={product.urlImage}
                    alt={product.title}
                    className="icon-cart"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <input
                    type="number"
                    value={product.quantity}
                    min="1"
                    onChange={(e) =>
                      onQuantityChange(product, parseInt(e.target.value))
                    }
                    className="quantity-input"
                  />
                  <p className="titulo-producto-carrito">{product.title}</p>
                  <span className="precio-producto-carrito">
                    ${product.price}
                  </span>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwipCk9SggRgUcM6UxpTkdWxiGOVn-A8guvQ&s"
                  alt="cerrar"
                  className="icon-close"
                  onClick={() => onDeleteProduct(product)}
                />
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total a pagar:</h3>
            <span className="total-pagar">${total}</span>
          </div>
          <button className="btn-clear-all" onClick={onCleanCart}>
            Vaciar Carrito
          </button>
        </>
      ) : (
        <p className="cart-empty">El carrito está vacío</p>
      )}
    </div>
  );
};

export default CartDropdown;
