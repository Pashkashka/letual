import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Firstchapter from "./pages/Chapters/firstchapter";
import Secondchapter from "./pages/Chapters/secondchapter";
import Thirdchapter from "./pages/Chapters/thirdchapter";
import Chapter from "./pages/Chapters/Chapter";
import Pagination from "./components/pagination";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import Fourthchapter from "./pages/Chapters/fourthchapter";
import Registration from "./pages/Registration";
import Description from "./components/Description";
import Cart from "./pages/Cart";
import React, { createContext, useState } from "react";
import axios from "axios";
import Chat from "./pages/chat";

export const AppContext = createContext();
function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  // const [cart, setCart] = useState([]);
  // const userId = localStorage.getItem("userId");
  // const [itemCount, setItemCount] = useState(0);
  // const [change, setChange] = useState(false);

  // React.useEffect(
  //   (change) => {
  //     axios
  //       .get(`https://localhost:7160/Cart/${userId}`)
  //       .then((response) => {
  //         setCart(response.data);
  //         setItemCount(response.data.length);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  //   [userId]
  // );

  return (
    // <AppContext.Provider
    //   value={{
    //     itemCount,
    //     setItemCount,
    //     cart,
    //     setCart,
    //     userId,
    //     change,
    //     setChange,
    //   }}
    // >
    <Router>
      <Header />
      <Chapter />
      {/* <Pagination /> */}

      <Routes>
        <Route
          path="/firstchapter"
          element={
            <Firstchapter
              onChangeSearchInput={onChangeSearchInput}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />
        <Route
          path="/secondchapter"
          element={
            <Secondchapter
              onChangeSearchInput={onChangeSearchInput}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />
        <Route
          path="/thirdchapter"
          element={
            <Thirdchapter
              onChangeSearchInput={onChangeSearchInput}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />
        <Route
          path="/fourfchapter"
          element={
            <Fourthchapter
              onChangeSearchInput={onChangeSearchInput}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
        <Route path="/login" element={<Registration />} />
        <Route path="/description/:path/:id" element={<Description />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
    // </AppContext.Provider>
  );
}

export default App;
