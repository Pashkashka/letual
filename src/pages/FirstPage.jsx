import { Link } from "react-router-dom";
// import Pagination from "../components/pagination";
import Footer from "../components/Footer";
import Hint from "../components/work";
import Slider from "../components/Slider";
import Pagination1 from "../components/pagination";

function FirstPage() {
  return (
    <div>
      <div className="wrapper">
        <Pagination1 />
        <div className="content1">
          <h1>О нас</h1>
          {/* <Slider /> */}
          <div className="mainSlider">
            <Slider />
          </div>
          <h2>Предупреждение</h2>
          <div className="photo">
            <img width={300} height={300} src="/img/photo.jpg" alt="logoType" />
          </div>
          <p>
            Это новый сайт магазина летуаль.Оригинальный сайт является фейком,
            поэтому советуем вам не покупать товары на оригинальном сайте, а
            <br />
            покупать у нас!!!
          </p>
          <span>Приятной покупки товаров!!!</span>
          <table border="3" cellspacing="5" cellpadding="3" color="gray">
            <tr>
              <td rowspan="2" colspan="2" align="center">
                Косметика
              </td>
              <td align="center">Помада</td>
              <td align="center">Тушь</td>
            </tr>
            <tr>
              <td align="center">Блеск</td>
              <td align="center">Тени</td>
            </tr>
            <tr>
              <td rowspan="2" colspan="2" align="center">
                Парфюмерия
              </td>
              <td align="center">Духи</td>
              <td align="center">Туалетная вода</td>
            </tr>
          </table>
          <ul className="squar">
            <li>Для женщин</li>
            <li>Для мужчин</li>
            <li>Детское</li>
          </ul>
          <ul className="Roman">
            <li>Самовывоз</li>
            <li>Доставка</li>
            {/* <li>Маски</li> */}
          </ul>

          <ol>
            <li>
              Духи
              <ol>
                <li>Парфюмы</li>
                <li>Туалетная вода</li>
              </ol>
            </li>
            <li>Косметика</li>
            <li>Маски</li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default FirstPage;
