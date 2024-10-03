import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGetProductQuery } from "../redux/api";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [fragrances, setFragrances] = useState([]);
  const path = "Fragrance";
  const navigate = useNavigate();

  const { data } = useGetProductQuery(path);

  useEffect(() => {
    if (data) {
      setFragrances(data);
      console.log(data.length);
    }
  }, [data]);

  // useEffect(() => {
  //   axios
  //     .get("https://localhost:7160/Fragrance")
  //     .then((response) => {
  //       setFragrances(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => prevIndex - 1);
  };

  const handleSlide = (id) => {
    navigate(`/description/${path}/${id}`);
  };

  return (
    <div className="slider">
      <div className="slides">
        {fragrances.map((item, index) => (
          <div
            key={item.id}
            className={slideIndex === index ? "slide active" : "slide"}
            onClick={() => {
              handleSlide(item.id);
            }}
          >
            <img
              className="slideImg"
              src={item.img_URL}
              alt={`Fragrance ${item.id}`}
            />
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
