import React from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../utils/numberWithCommas";
import Button from "./Button";

const ProductCard = (props) => {
  const { data } = props;
  return (
    <div className="product__card">
      <div className="product__card__item">
        <Link to={`/catalog/${data.slug}`}>
          <div className="product__card__item__img">
            <img src={data.image.imgAvt} alt="" />
          </div>
          <div className="product__card__item__info">
            <h1 className="product__card__item__info__name">{data.name}</h1>
            <p className="product__card__item__info__price">
              {numberWithCommas(data.price)}&nbsp;đ&nbsp;&nbsp;
              <del>{numberWithCommas(data.discount)}&nbsp;đ</del>
            </p>
            <div className="product__card__item__info__rate">
              {data.evaluate === 1 ? (
                <>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                </>
              ) : data.evaluate === 2 ? (
                <>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                </>
              ) : data.evaluate === 3 ? (
                <>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                </>
              ) : data.evaluate === 4 ? (
                <>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                </>
              ) : (
                <>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
