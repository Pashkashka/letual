import Card from "../../components/Card";
import React, { useEffect } from "react";
import axios from "axios";
import Pagination1 from "../../components/pagination";
import { useGetProductQuery } from "../../redux/api";

function Fourthchapter({ onChangeSearchInput, searchValue, setSearchValue }) {
  const [cosmetics, setCosmetics] = React.useState([]);
  const path = "Cosmetics";
  const { data } = useGetProductQuery(path);
  useEffect(() => {
    if (data) {
      setCosmetics(data);
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
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Косметика"}{" "}
        </h1>
        <div className="Pizza">
          {
            //cosmetics.map((item, index) => (
            cosmetics
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
export default Fourthchapter;
