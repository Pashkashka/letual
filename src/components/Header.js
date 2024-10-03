import { Link, useNavigate } from "react-router-dom";

import Auth from "./Auth";
import UserTitle from "./userTitle";

function Header() {
  const userId = localStorage.getItem("userId");
  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <img
            className="logo "
            width={120}
            height={120}
            src="/img/letual.png"
            alt="logoType"
          />
        </Link>
      </div>
      <div className="title">
        <h1>Летуаль</h1>
        <p></p>
      </div>
      {!userId ? <Auth /> : <UserTitle />}
    </header>
  );
}

export default Header;
