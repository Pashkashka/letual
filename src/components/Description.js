import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery, useGetProductQuery } from "../redux/api";

function Description() {
  // const itemId = JSON.parse(localStorage.getItem("cardId"));
  // const pathId = JSON.parse(localStorage.getItem("path"));
  const { id, path } = useParams();

  const [product, setProduct] = useState([]);

  const { data } = useGetProductByIdQuery({ id, path });

  useEffect(() => {
    if (id && data) {
      setProduct(data);
    }
  }, [id, data]);
  // useEffect(() => {
  //   if (id) {
  //     axios
  //       .get(`https://localhost:7160/${path}/${id}`)
  //       .then((res) => {
  //         setProduct(res.data);
  //         // localStorage.removeItem("cardId");
  //         // localStorage.removeItem("path");
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         alert("Error getting user information");
  //       });
  //   }
  // }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Подробнее</h1>
      <div className="description">
        <div className="Image">
          <img src={product.img_URL} width={600} hight={500} />
        </div>
        <div className="descText">
          <p>{product.title}</p>
          <br />
          <span>{product.description}</span>
          <br />
          <p>{product.price}$</p>
        </div>
      </div>
    </div>
  );
}
export default Description;
