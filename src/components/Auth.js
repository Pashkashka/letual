import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserTitle from "./userTitle";
import { useGetUsersQuery } from "../redux/api";
function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  const { data } = useGetUsersQuery();

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);
  // useEffect(() => {
  //   axios
  //     .get("https://localhost:7160/Auth")
  //     .then((res) => {
  //       setUsers(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       alert("Error fetching users");
  //     });
  // }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const authenticatedUser = users.find(
      (u) => u.login === login && u.password === password
    );
    if (!authenticatedUser) {
      alert("Incorrect username or password");
      return;
    }
    localStorage.setItem("userId", authenticatedUser.id);
    localStorage.setItem("userLogin", login);
    setUser(authenticatedUser);
    // window.location.href = "/";
    //navigate("/");
    window.location.reload();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  return (
    <div className="auth">
      <div className="login">
        <p>Логин:</p>
        <input
          className="input-field"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        ></input>
      </div>
      <div className="password">
        <p>Пароль:</p>
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        ></input>
      </div>
      <div className="authbutton">
        <button onClick={handleLogin}>Войти</button>
        <Link to="/login">
          <p>Регистрация...</p>
        </Link>
      </div>
      {/* <UserTitle /> */}
    </div>
  );
}
export default Auth;
