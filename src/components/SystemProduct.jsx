import React from "react";

const SystemProduct = (props) => {
  const { product } = props;
  return (
    <div className="system__product">
      <div className="system__product__name">
        Cấu hình điện thoại {product.name}
      </div>
      <ul className="system__product__list">
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Màn hình</p>
          <p className="system__product__list__item__right">
            {product.system.screen}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Hệ điều hành</p>
          <p className="system__product__list__item__right">
            {product.system.operating}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Camera</p>
          <p className="system__product__list__item__right">
            {product.system.camera}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Chip</p>
          <p className="system__product__list__item__right">
            {product.system.chip}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">RAM</p>
          <p className="system__product__list__item__right">
            {product.system.ram}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Bộ nhớ trong</p>
          <p className="system__product__list__item__right">
            {product.system.memory}
          </p>
        </li>
        <li className="system__product__list__item">
          <p className="system__product__list__item__left">Pin</p>
          <p className="system__product__list__item__right">
            {product.system.pin}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SystemProduct;
