import React, { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/shopping-cart/cartItemSlice";

import Banner from "./Banner";
import promotion from "../api/promotion";
import { policyProductView } from "../api/policy";
import PolicyProductView from "./PolicyProductView";
import Grid from "./Grid";
import SystemProduct from "./SystemProduct";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import numberWithCommas from "../utils/numberWithCommas";
import { useUserAuth } from "../context/UserAuthContext";

const ProductView = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(product.image.img01);
  const [toggleDesc, setToggleDesc] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(undefined);
  const [capacity, setCapacity] = useState(undefined);
  const [price, setPrice] = useState(product.price);
  const { user } = useUserAuth();

  const changeImage = (img) => {
    setImage(img);
  };
  const changeQuantity = (type) => {
    if (type === "PLUS") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const check = () => {
    if (!user) {
      alert("Vui lòng đăng nhập.");
      navigate("/login");
      return false;
    }
    if (capacity === undefined) {
      toast.error("Vui lòng chọn dung lượng.");
      return false;
    }
    if (color === undefined) {
      toast.error("Vui lòng chọn màu sắc.");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          slug: product.slug,
          color: color,
          capacity: capacity,
          quantity: quantity,
          price: price,
        })
      );
      toast.success("Thêm vào giỏ hàng thành công.");
    }
  };

  const goToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          slug: product.slug,
          color: color,
          capacity: capacity,
          quantity: quantity,
          price: price,
        })
      );
      navigate("/cart");
    }
  };
  return (
    <div className="product">
      <h1 className="product__view__name">Điện thoại {product.name}</h1>
      <div className="product__view">
        <div className="product__view__left">
          <div className="product__view__left__img">
            <img src={image} alt="" className="product__view__left__img--avt" />
            <div className="product__view__left__img__box">
              <img
                src={product.image.img04}
                alt=""
                onClick={() => changeImage(product.image.img04)}
              />
              <img
                src={product.image.img03}
                alt=""
                onClick={() => changeImage(product.image.img03)}
              />
              <img
                src={product.image.img01}
                alt=""
                onClick={() => changeImage(product.image.img01)}
              />
              <img
                src={product.image.img02}
                alt=""
                onClick={() => changeImage(product.image.img02)}
              />
            </div>
          </div>
          <div className="product__view__left__policy">
            <Grid col={2} mdCol={2} smCol={1} gap={20}>
              {policyProductView.map((item, index) => (
                <PolicyProductView
                  icon={item.icon}
                  title={item.description}
                  key={item.id}
                />
              ))}
            </Grid>
          </div>
          <img
            src={product.image.imgDesc}
            alt=""
            className="product__view__left__img--desc"
          />
        </div>
        <div className="product__view__right">
          <div className="product__view__right__item">
            {product.capacity.map((item, index) => (
              <div
                key={index}
                className={`product__view__right__item__info product__view__right__item__info__capacity ${
                  item === capacity ? "active" : ""
                }`}
                onClick={() => setCapacity(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="product__view__right__item">
            {product.colors.map((item, index) => (
              <div
                className={`product__view__right__item__info product__view__right__item__info__color ${
                  item === color ? "active" : ""
                }`}
                key={index}
                onClick={() => setColor(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="product__view__right__item">
            <div className="product__view__right__item__quantity">
              <div
                className="product__view__right__item__quantity__btn"
                onClick={() => changeQuantity("MINUS")}
              >
                <i className="bx bx-minus"></i>
              </div>
              <div className="product__view__right__item__quantity__input">
                {quantity}
              </div>
              <div
                className="product__view__right__item__quantity__btn"
                onClick={() => changeQuantity("PLUS")}
              >
                <i className="bx bx-plus"></i>
              </div>
            </div>
          </div>
          <div className="product__view__right__item__price">
            {numberWithCommas(price)} đ
          </div>
          <div className="product__view__right__title">
            Giá tại <span>Hồ Chí Minh</span>
          </div>
          <Banner
            img="https://cdn.tgdd.vn/2022/01/banner/desk920x230-920x230-9.png"
            marginBottom={10}
          />
          <div className="product__view__right__promotion">
            <div className="product__view__right__promotion__info">
              <div className="product__view__right__promotion__info__title">
                Khuyến mãi
              </div>
              <div className="product__view__right__promotion__info__desc">
                Giá và khuyến mãi dự kiến áp dụng đến 23:00 23/01
              </div>
            </div>
            {promotion.map((item, index) => (
              <div
                className="product__view__right__promotion__item"
                key={item.id}
              >
                <div className="product__view__right__promotion__item__stt">
                  {item.id}
                </div>
                <div className="product__view__right__promotion__item__title">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          {product.status === 1 ? (
            <div className="product__view__right__item__status product__view__right__item__status--stock">
              Còn hàng
            </div>
          ) : (
            <div className="product__view__right__item__status product__view__right__item__status--outstock">
              Hết hàng
            </div>
          )}

          <div className="product__view__right__item">
            <div className="product__view__right__item__add">
              <Button size="sm" onClick={() => goToCart()}>
                Mua ngay
              </Button>
              <Button size="sm" onClick={() => addToCart()}>
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
          <SystemProduct product={product} />
          <div className="product__view__right__desc">
            <div
              className={`product__view__right__desc__info ${
                toggleDesc ? "toggle" : ""
              }`}
            >
              <h3>Thông tin sản phẩm</h3>
              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </div>
            <div className="product__view__right__desc__btn">
              <Button size="sm" onClick={() => setToggleDesc(!toggleDesc)}>
                {toggleDesc ? "Thu gọn" : "Xem thêm "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
