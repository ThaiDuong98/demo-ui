import React from "react";
import Product from "../product/Product";

const ProductList = ({ productCategoty, shortNote, producList }) => {
  return (
    <section id="product1" class="section-p1">
      <h2>{productCategoty}</h2>
      <p>{shortNote}</p>
      <div class="pro-container">
        {producList.map((item) => (
          <Product
            product={item}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
