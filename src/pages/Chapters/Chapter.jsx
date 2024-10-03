import { Link } from "react-router-dom";

function Chapter() {
  return (
    <header className="chapters">
      <Link to="/firstchapter">
        <p>Духи</p>
      </Link>
      <Link to="/secondchapter">
        <p>Крема</p>
      </Link>
      <Link to="/thirdchapter">
        <p>Маски</p>
      </Link>
      <Link to="/fourfchapter">
        <p>Косметика</p>
      </Link>
    </header>
  );
}

export default Chapter;
