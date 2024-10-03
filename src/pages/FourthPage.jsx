import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Pagination1 from "../components/pagination";
import axios from "axios";

function FourthPage() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [feed, setFeed] = useState([]);
  const user_id = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get("https://localhost:7160/Feedback")
      .then((response) => {
        setFeed(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFeedback = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Пожалуйста, введите адрес электронной почты.");
      return;
    }
    const newFeedback = {
      user_id,
      email,
      description,
    };

    await axios
      .post("https://localhost:7160/Feedback", newFeedback)
      // .then((response) => {
      //   // localStorage.setItem("token", res.data.token);
      //   // window.location.reload();
      // })
      .catch((err) => {
        console.error(err);
        alert("Registration Error");
      });

    axios
      .get("https://localhost:7160/Feedback")
      .then((response) => {
        setFeed(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="wrapper">
        <Pagination1 />
        <div className="content">
          <h1>Форма обратной связи</h1>
          <input
            className="Email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <br />
          <textarea
            className="problem"
            placeholder="Опишите вашу проблему"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <button onClick={handleFeedback}>Отправить</button>
        </div>
        <div className="feed">
          {feed.map((item) => (
            <div className="feedcard">
              <p>{item.email}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default FourthPage;
