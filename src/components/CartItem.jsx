import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import numberWithCommas from "../utils/numberWithCommas";
import { removeItem, updateItem } from "../redux/shopping-cart/cartItemSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.e.quantity);
  const changeQuantity = (type) => {
    if (type === "PLUS") {
      dispatch(
        updateItem({
          ...item.e,
          quantity: quantity + 1,
        })
      );
    } else {
      dispatch(
        updateItem({
          ...item.e,
          quantity: quantity - 1 < 1 ? 1 : quantity - 1,
        })
      );
    }
  };

  const removeCartItem = () => {
    dispatch(removeItem(item.e));
  };
  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.e.quantity);
  }, [props.item]);
  return (
    <div className="cart__item">
      <div className="cart__item__img">
        <img src={item.product.image.imgAvt} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${item.e.slug}`}>
            {`${item.product.name} - ${item.e.color} - ${item.e.capacity}`}
          </Link>
        </div>
        <div className="cart__item__info__name__price">
          {numberWithCommas(item.product.price)}
        </div>
        <div className="cart__item__info__quantity">
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
        <div className="cart__item__info__del" onClick={() => removeCartItem()}>
          <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
