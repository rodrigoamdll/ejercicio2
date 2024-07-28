import React, { useState } from "react";

import dataSports from "./data/dataSports.json";
import dataGeek from "./data/dataGear.json"; 

import styles from "../modal.css";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", descripcion: "" });

  // Combina ambos conjuntos de datos
  const data = [...dataSports, ...dataGeek];

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  const showModal = (title, descripcion) => {
    setModalContent({ title, descripcion });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div className="container-items">
        {data.map((product) => (
          <div className="item" key={product.id}>
            <figure>
              <img
                src={product.urlImage}
                alt={product.title}
                onClick={() => showModal(product.title, product.descripcion)}
                style={{ cursor: 'pointer' }}
              />
            </figure>
            <div className="info-product">
              <h2>{product.title}</h2>
              <span className="cat">{product.categoria}</span>
              <p className="desc">{product.descripcion}</p>
              <p className="price">${product.price}</p>
              <button onClick={() => onAddProduct(product)}>
                Registrar
              </button>
            </div>
          </div>
        ))}

        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>{modalContent.title}</h2>
              <p>{modalContent.descripcion}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
