import Card from "../../components/Card";
import React, { useEffect } from "react";
import axios from "axios";
import Pagination1 from "../../components/pagination";
import { useGetProductQuery } from "../../redux/api";
function Secondchapter({ onChangeSearchInput, searchValue, setSearchValue }) {
  const path = "Creams";
  const [creams, setCreams] = React.useState([]);
  const { data } = useGetProductQuery(path);

  useEffect(() => {
    if (data) {
      setCreams(data);
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
        <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Крема"} </h1>
        <div className="Pizza">
          {
            //creams.map((item, index) => (
            creams
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  path={path}
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
export default Secondchapter;
