import React from "react";

const Paginnation = (props) => {
  const { productPerPage, totalProduct, paginate, changeCurrentPage } = props;
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }
  const updatePage = (type) => {
    changeCurrentPage(type);
  };

  return (
    <nav>
      <ul className="page">
        <li className="page__control" onClick={() => updatePage("LEFT")}>
          <i className="bx bx-chevron-left"></i>
        </li>
        {pageNumber.map((number, index) => (
          <li
            key={index}
            className="page__item"
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        <li className="page__control" onClick={() => updatePage("RIGHT")}>
          <i className="bx bx-chevron-right"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Paginnation;
