import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useGetCartByUserIdQuery, useGetUserByIdQuery } from "../redux/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function UserTitle() {
  const value = useSelector((state) => state.counter.value);
  // const { itemCount } = useContext(AppContext);
  const [user, setUser] = useState([]);
  const userId = localStorage.getItem("userId");
  const userLogin = localStorage.getItem("userLogin");
  const navigate = useNavigate();
  const [change, setChange] = useState(false);
  const { data, refetch } = useGetCartByUserIdQuery(userId);
  const { getUser } = useGetUserByIdQuery(userId);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (data) {
      setCart(data);
      console.log(data.length);
    }
  }, [data]);
  const count = cart.length;

  if (!user) {
    return null;
    //window.location.href = '/login';
    // navigate("/login");
  }

  const Nav = () => {
    // window.location.href = "/Cart";
    refetch();
    setChange(true);
    navigate("/Cart");
  };

  const Exit = async () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userLogin");
    // localStorage.removeItem("path");
    // localStorage.removeItem("cardId");
    window.location.reload();
  };

  return (
    <div className="User">
      <p>{userLogin}</p>
      <button onClick={Exit} className="ExitButton">
        Выйти
      </button>
      <br />
      <p style={{ cursor: "pointer" }} onClick={Nav}>
        {/* Корзина {itemCount} */}
        {change ? `Корзина ${count}` : `Корзина ${value}`}
      </p>
    </div>
  );
}
export default UserTitle;
