import axios from "axios";
import Pagination from "../components/pagination";
import { useEffect, useState } from "react";

function Chat() {
  const [description, setDescription] = useState("");
  const user_id = localStorage.getItem("userId");
  const user_login = localStorage.getItem("userLogin");
  const [feed, setFeed] = useState([]);

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

    const newFeedback = {
      user_login,
      description,
    };

    await axios
      .post("https://localhost:7160/Feedback", newFeedback)
      .then((res) => {
        // localStorage.setItem("token", res.data.token);
        // window.location.reload();
      })
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

    setDescription("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleFeedback(e);
    }
  };

  return (
    <div className="wrapper">
      {/* <Pagination /> */}
      <div className="chat">
        {feed.map((item) => (
          <div
            className={
              user_login === item.user_login ? "message" : "messageover"
            }
          >
            <p>{item.user_id}</p>
            {user_login === item.user_login ? (
              <p>я</p>
            ) : (
              <p>{item.user_login}</p>
            )}
            <span>{item.description}</span>
          </div>
        ))}
      </div>
      <div className="chatInput">
        <input
          placeholder="Сообщение"
          onChange={(e) => setDescription(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleFeedback}>Отправить</button>
      </div>
    </div>
  );
}
export default Chat;
