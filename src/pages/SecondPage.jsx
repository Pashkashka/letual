import Footer from "../components/Footer";
import Pagination1 from "../components/pagination";

function SecondPage() {
  return (
    <div>
      <div className="wrapper">
        <Pagination1 />
        <div className="Contact">
          <h1>Контактная информация</h1>
          <p>Номер телефона:</p>
          <span>88005553535</span>
          <br />
          <p>Почта:</p>
          <span>Letual@mail.ru</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SecondPage;
