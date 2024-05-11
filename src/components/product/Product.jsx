import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navige = useNavigate()
  const onRedirectTodetailPage = () => {
    navige(`/product/${product.id}`)
  }

  return (
    <div class="pro" onClick={onRedirectTodetailPage}>
      <img src={product.srcImg} alt="" />
      <div class="des">
        <span>{product.branch}</span>
        <h5>{product.name}</h5>
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h4>{product.price} VNĐ</h4>
      </div>
      <a href="#">
        <i class="fal fa-shopping-cart cart"></i>
      </a>
    </div>
  );
};

export default Product;
