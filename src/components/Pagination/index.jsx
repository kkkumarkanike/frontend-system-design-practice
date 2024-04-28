import React, { useEffect, useState } from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import "./styles.css";

function Index() {
  const [page, setPage] = useState(1);
  const { products, totalPages, error } = useFetchProducts(
    `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`,
    page
  );

  const handlePageChange = (pageNo) => {
    if (pageNo > totalPages || pageNo < 1) {
      return;
    }
    setPage(pageNo);
  };
  return (
    <div>
      <div className="container">
        {products?.map((product) => (
          <div className="product" key={product.id}>
            <img src={product?.thumbnail} alt={product?.title} />
            <span id={product.id}>{product?.title}</span>
          </div>
        ))}
      </div>
      <div className="pagination_container">
        <span
          onClick={() => handlePageChange(page - 1)}
          className={page === 1 ? "disabled" : ""}
        >
          ⬅️
        </span>
        {[...Array(totalPages)].map((_, idx) => (
          <span
            key={idx}
            onClick={() => handlePageChange(idx + 1)}
            className={page === idx + 1 ? "active" : ""}
          >
            {idx + 1}
          </span>
        ))}
        <span
          onClick={() => handlePageChange(page + 1)}
          className={page === totalPages ? "disabled" : ""}
        >
          ➡️
        </span>
      </div>
    </div>
  );
}

export default Index;
