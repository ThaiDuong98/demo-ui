import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductOne } from "../../constanst";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    showDetailData();
  }, [id]);

  const showDetailData = () => {
    const fetchProduct = ProductOne.find((item) => item.id === id);

    if (fetchProduct) {
      setProduct(fetchProduct);
    } else {
      setProduct({});
    }
  };

  const onViewImg = () => {
    var MainImg = document.getElementById("MainImg");
    var small = document.getElementsByClassName("small-img");

    for (var i = 0; i < small.length; i++) {
      small[i].onclick = function () {
        MainImg.src = this.src;
      };
    }
  };

  return (
    <>
      {product ? (
        <section id="prodetails" class="section-p1">
          <div class="single-pro-imge">
            <img src={product.srcImg} alt="" width="100%" id="MainImg" />
            <div class="small-img-group">
              {product?.imgsView?.map((smallImg) => (
                <div class="small-img-col" onClick={(e) => onViewImg()}>
                  <img src={smallImg} width="100%" alt="" class="small-img" />
                </div>
              ))}
            </div>
          </div>

          <div class="single-pro-detail">
            <div class="detail-left">
              <h6>Home / T-Shirt</h6>
              <h4>{product.name}</h4>
              <h2>{product.price}</h2>
              <select name="" id="">
                <option value="">Select size</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
              <input type="number" value="1" />
              <button class="normal">Add to Cart</button>
            </div>
            <div class="detail-right">
              <h4>Product detail</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <div>Product not found</div>
      )}
      hihi
    </>
  );
};

export default ProductDetail;