import React, { useState } from "react";
import Helmet from "../components/Helmet";
import productData from "../api/productsApi";
import Banner from "../components/Banner";
import IfinityList from "../components/IfinityList";
import categorys from "../api/category";
import Paginnation from "../components/Paginnation";

const Catalog = () => {
  const productList = productData.getAllProducts();
  const [product, setProduct] = useState(productList);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);

  // Get curren page
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFristProduct = indexOfLastProduct - productPerPage;
  const currentProduct = product.slice(indexOfFristProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterSelect = (item) => {
    const productFilter = productList.filter((e) => e.categorySlug === item);
    setProduct(productFilter);
  };
  const allProduct = () => {
    setProduct(productList);
  };
  const changeCurrentPage = (type) => {
    if (type === "RIGHT") {
      if (Math.ceil(product.length / productPerPage) === currentPage) {
        return;
      } else {
        setCurrentPage(currentPage + 1);
      }
    } else {
      setCurrentPage(currentPage - 1 < 1 ? 1 : currentPage - 1);
    }
  };

  return (
    <Helmet title="Sản phẩm">
      <Banner
        img="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai_103211774.jpg"
        marginBottom={30}
      />
      <div className="catalog">
        <div className="catalog__search">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="bx bx-search"></i>
        </div>

        <div className="catalog__filter">
          <button onClick={allProduct}>Tất cả</button>
          {categorys.map((item, index) => (
            <button
              onClick={() => filterSelect(item.categorySlug)}
              key={item.id}
            >
              {item.display}
            </button>
          ))}
        </div>
        <div className="catalog__content">
          <IfinityList product={currentProduct} searchTerm={searchTerm} />
        </div>
        <Paginnation
          productPerPage={productPerPage}
          totalProduct={product.length}
          paginate={paginate}
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
        />
      </div>
    </Helmet>
  );
};

export default Catalog;
