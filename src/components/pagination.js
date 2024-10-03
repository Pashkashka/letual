import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../App";

function Pagination1() {
  const navigate = useNavigate();
  // const { itemCount } = useContext(AppContext);
  return (
    <div className="links">
      <Link to="/">
        <p>О нас</p>
      </Link>
      <Link to="/second">
        <p>Контактная информация</p>
      </Link>
      <Link to="/third">
        <p>Как добраться</p>
      </Link>
      <Link to="/fourth">
        <p>Форма обратной связи</p>
      </Link>

      {/* <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/cart");
        }}
      >
        Корзина {itemCount}
      </p> */}
      <Link to="/chat">
        <p>Чат</p>
      </Link>
    </div>
  );
}

export default Pagination1;
