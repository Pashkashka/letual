import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  useGetCartByUserIdQuery,
} from "../redux/slices/cartSlice";
import {
  useAddToCartMutation,
  useDeleteCartByIdMutation,
  useUpdateProductCountMutation,
} from "../redux/api";

function Card({ path, id, Title, Price, Img_URL }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // const { change, setChange } = useContext(AppContext);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const handleCard = (e) => {
    e.preventDefault();
    // localStorage.setItem("cardId", JSON.stringify(id));
    // localStorage.setItem("path", JSON.stringify(path));
    // window.location.href = "/description";
    navigate(`/description/${path}/${id}`);
  };
  const userId = localStorage.getItem("userId");
  const [addCart] = useAddToCartMutation();
  const handleCart = async () => {
    setCartCount(cartCount + 1);
    const item = {
      // id: id,
      title: Title,
      price: Price,
      img_URL: Img_URL,
      userId: userId,
      product_id: id,
      count: cartCount,
    };

    addCart(item).catch((error) => {
      console.error("Error adding item to cart", error);
    });

    // setChange(true);
    dispatch(increment());
    setAdded(true);
  };

  const [added, setAdded] = useState(false);
  const [updateCount] = useUpdateProductCountMutation();

  const handleplus = () => {
    setCartCount(cartCount + 1);
    const item = {
      // id: id,
      title: Title,
      price: Price,
      img_URL: Img_URL,
      userId: userId,
      product_id: id,
      count: cartCount,
    };

    // axios.put(`https://localhost:7160/Cart/${id}`, item);
    updateCount({ id, item });
  };

  const handleminus = async () => {
    if (cartCount == 1) {
      setAdded(false);
    } else {
      await setCartCount(cartCount - 1);
      const item = {
        // id: id,
        title: Title,
        price: Price,
        img_URL: Img_URL,
        userId: userId,
        product_id: id,
        count: cartCount,
      };
      // axios.put(`https://localhost:7160/Cart/${id}`, item);

      updateCount({ id, item });
    }
  };

  return (
    <div className="card">
      <img
        onClick={handleCard}
        className="CardImg"
        width={200}
        height={200}
        src={Img_URL}
        alt="Pizza"
      />

      <h5>{Title} </h5>
      <div className="cardButt"></div>
      <div className="Price"></div>
      <div>
        <div>
          <span>Price:</span>
          <b>${Price}</b>
        </div>
        {!added ? (
          <button className="cartButton" onClick={handleCart}>
            <img width={20} height={20} src="img/pcart.png" alt="Cart" />
          </button>
        ) : (
          <div className="addmore">
            <p onClick={handleminus}>-</p>
            <span>{cartCount}</span>
            <p onClick={handleplus}>+</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Card;
