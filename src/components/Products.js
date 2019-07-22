import React from "react";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = () => {
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.key} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
