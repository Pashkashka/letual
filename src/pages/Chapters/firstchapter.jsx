import Card from "../../components/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination1 from "../../components/pagination";
import { useGetProductQuery } from "../../redux/api";
import { Pagination } from "antd";

function Firstchapter({ onChangeSearchInput, searchValue, setSearchValue }) {
  const [fragrances, setFragrances] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(2);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProduct = fragrances.slice(firstIndex, lastIndex);

  const paginate = (value) => {
    setCurrentPage(value);
  };

  const path = "Fragrance";

  const { data } = useGetProductQuery(path);

  useEffect(() => {
    if (data) {
      setFragrances(data);
      console.log(data.length);
    }
  }, [data]);

  return (
    <div className="wrapper">
      <Pagination1 />
      <div className="Chap">
        <input
          className="search"
          onChange={onChangeSearchInput}
          value={searchValue}
          placeholder="Поиск..."
        />
        <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Духи"} </h1>
        <div className="Pizza">
          {currentProduct
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                path={path}
                id={item.id}
                Title={item.title}
                Price={item.price}
                Img_URL={item.img_URL}
              />
            ))}
        </div>
        <Pagination
          defaultCurrent={currentPage}
          total={fragrances.length}
          defaultPageSize={productsPerPage}
          size="small"
          onChange={paginate}
        />
      </div>
    </div>
  );
}
export default Firstchapter;
