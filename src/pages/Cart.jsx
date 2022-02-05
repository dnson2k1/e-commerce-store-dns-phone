import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productData from "../api/productsApi";
import Banner from "../components/Banner";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Helmet from "../components/Helmet";
import numberWithCommas from "../utils/numberWithCommas";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProduct, setCartProduct] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProduct(productData.getCartItemDetails(cartItems));
    setTotalProduct(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);

  const handleOrder = () => {
    toast.success(
      "Cảm ơn người anh em đã mua hàng. Người anh em vui lòng chú ý điện thoại sau 3 ngày. Chúc người anh em sức khỏe <3 "
    );
  };

  return (
    <Helmet title="Giỏ hàng">
      <Banner
        img="https://magiamgialazada.vn/wp-content/uploads/2018/01/voucher-bi-mat-lazada-khuyen-mai-tet-am-lich-2018-truyen-nhan-sam-tet.png"
        marginBottom={50}
      />

      <div className="cart">
        <div className="cart__list">
          {cartProduct.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Shopping Bag ({totalProduct})</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block" onClick={handleOrder}>
              Đặt hàng
            </Button>

            <Button size="block">
              <Link to="/catalog">Tiếp tục mua hàng</Link>
            </Button>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
