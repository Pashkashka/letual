import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import CartItem from "../components/CartItem";
// import { AppContext } from "../App";
import Pagination from "../components/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  useDeleteCartByIdMutation,
  useDeleteCartByIdQuery,
  useDeleteCartByUserIdMutation,
  useGetCartByUserIdQuery,
} from "../redux/api";

function Cart() {
  const userId = localStorage.getItem("userId");

  const dispatch = useDispatch();
  const { data, refetch } = useGetCartByUserIdQuery(userId);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (data) {
      setCart(data);
      console.log(data.length);
    }
  }, [data]);
  const count = cart.length;

  const [cartDelete] = useDeleteCartByUserIdMutation();

  const handleDelete = async () => {
    try {
      await cartDelete(userId);
      // window.location.reload();
      setCart([]);
      // refetch();
    } catch (error) {
      // Handle error if deletion fails
      alert("Ошибка при удалении из корзины");
    }
  };

  // const handleCart = async (id) => {
  //   try {
  //     await axios.delete(`https://localhost:7160/Cart/${id}`);
  //     setCart((prevItems) => prevItems.filter((item) => item.id !== id));
  //     // setItemCount(itemCount - 1);
  //   } catch (error) {
  //     // Handle error if deletion fails
  //     alert("Ошибка при удалении из корзины");
  //   }
  // };

  const [datadel] = useDeleteCartByIdMutation();

  const handleCart = async (id) => {
    await datadel(id);
    setCart((prevItems) => prevItems.filter((item) => item.id !== id));
    // refetch();
  };

  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += Number(item.price);
  });

  return (
    <div className="wrapper">
      <Pagination />
      <div className="Cart">
        <h1>Корзина</h1>
        {/* <button onClick={() => dispatch(getItemCart())}> go</button> */}

        {count > 0 ? (
          <h3 className="deleteCart" onClick={handleDelete}>
            Очистить корзину
          </h3>
        ) : null}
        <div className="Pizza">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              id={item.id}
              Title={item.title}
              Price={item.price}
              Img_URL={item.img_URL}
              count={item.count}
              handleCart={() => handleCart(item.id)}
            />
          ))}
        </div>

        <div>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={handleDelete} className="checkButton">
            Заказать {count} товаров
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
