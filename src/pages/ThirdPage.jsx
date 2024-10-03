import Footer from "../components/Footer";
import Pagination1 from "../components/pagination";

function ThirdPage() {
  return (
    <div>
      <div className="wrapper">
        <Pagination1 />
        <div className="location">
          <h1>Как добраться</h1>
          <p>Адрес:</p>
          <span>Вадковский пер., 1, Москва, 127055 </span>
          <br />
          <p>Метро:</p>
          <span>Менделеевская, Савёловская</span>
          <br />
          <p>Режим работы:</p>
          <span>08:00-22:00 без выходных</span>
        </div>
        <div className="Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574257.6119367682!2d36.375373878125!3d55.7898727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a1d33c101e9%3A0xcd785c3e7101222a!2z0JzQk9Ci0KMg0KHRgtCw0L3QutC40L0!5e0!3m2!1sru!2sru!4v1695652740521!5m2!1sru!2sru"
            style={{ width: "600px", height: "300px", border: "0" }}
            title="gg"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ThirdPage;
