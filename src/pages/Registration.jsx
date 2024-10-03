// import React from "react";

// import axios from "axios";

// function Registration() {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [phone, setPhoneNum] = React.useState("");
//   const [name, setName] = React.useState("");
//   const [login, setLogin] = React.useState("");
//   const [options, setOptions] = React.useState([]);
//   const [id, setId] = React.useState();
//   const handleLogin1 = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://localhost:7160/Auth", {
//         email,
//         password,
//         name,
//         login,
//         phone,
//       })
//       .then((res) => {
//         localStorage.setItem("token", res.data.token);
//         window.location.href = "/";
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Registration Error");
//       });
//   };

//   React.useEffect(() => {
//     document.querySelector(".overlay").style.display = "block";
//   }, []);

//   return (
//     <div className="overlay">
//       <div className="Login">
//         <h2>Registration</h2>
//         {/* <div className="log">
//           <input
//             placeholder="id..."
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//           />
//         </div> */}
//         <div className="log">
//           <input
//             placeholder="Login..."
//             value={login}
//             onChange={(e) => setLogin(e.target.value)}
//           />
//         </div>
//         <div className="log">
//           <input
//             placeholder="Password..."
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="log">
//           <input
//             placeholder="Email..."
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="log">
//           <input
//             placeholder="Phone Number..."
//             value={phone}
//             onChange={(e) => setPhoneNum(e.target.value)}
//           />
//         </div>
//         <div className="log">
//           <input
//             placeholder="Name..."
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <button className="logBtn" onClick={handleLogin1}>
//           Зарегистрироваться
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Registration;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAddUserMutation } from "../redux/api";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhoneNum] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [maxId, setMaxId] = useState(0);

  useEffect(() => {
    axios
      .get("https://localhost:7160/Auth")
      .then((res) => {
        // Получаем список всех пользователей из базы данных и находим максимальный id
        const users = res.data;
        const maxId = users.reduce((max, user) => {
          return user.id > max ? user.id : max;
        }, 0);
        setMaxId(maxId);
      })
      .catch((err) => {
        console.error(err);
        alert("Error retrieving user list");
      });
  }, []); // Пустой зависимости массив, чтобы useEffect выполнился только один раз при загрузке компонента

  const [addUser] = useAddUserMutation();

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!email || !password || !name || !login || !phone) {
      alert("Пожалуйста, введите всю информацию");
      return;
    }
    const newUser = {
      id: maxId + 1, // Новый пользователь получает максимальный id + 1
      email,
      password,
      name,
      login,
      phone,
    };

    // axios
    //   .post("https://localhost:7160/Auth", newUser)
    addUser(newUser)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(err);
        alert("Registration Error");
      });
  };

  useEffect(() => {
    document.querySelector(".overlay").style.display = "block";
  }, []);

  return (
    <div className="overlay">
      <div className="Login">
        <Link to="/">
          <p>Назад</p>
        </Link>
        <h2>Registration</h2>
        <div className="log">
          <input
            placeholder="Login..."
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="log">
          <input
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="log">
          <input
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="log">
          <input
            placeholder="Phone Number..."
            value={phone}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>
        <div className="log">
          <input
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button className="logBtn" onClick={handleRegistration}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
}

export default Registration;
