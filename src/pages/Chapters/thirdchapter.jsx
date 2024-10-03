import Card from "../../components/Card";
import React, { useEffect } from "react";
import axios from "axios";
import Pagination1 from "../../components/pagination";
import { useGetMasksQuery, useGetProductQuery } from "../../redux/api";

function Thirdchapter({ onChangeSearchInput, searchValue, setSearchValue }) {
  const path = "Masks";
  const [faceMasks, setFaceMasks] = React.useState([]);

  const { data } = useGetProductQuery(path);

  useEffect(() => {
    if (data) {
      setFaceMasks(data);
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
        <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Маски"} </h1>
        <div className="Pizza">
          {
            //faceMasks.map((item, index) => (
            faceMasks
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
              ))
          }
        </div>
      </div>
    </div>
  );
}
export default Thirdchapter;
