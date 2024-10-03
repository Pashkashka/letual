import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// function CartItem({ id, Title, Price, Img_URL }) {
//  useEffect=()=>{
//   const handleCart = async () => {
//     try {
//       await axios.delete(`https://localhost:7160/Cart/${id}`);

//     } catch (error) {
//       // Handle error if deletion fails
//       alert("Ошибка при удалении из карзины");
//     }
//   };
//  }

//   return (
//     <div className="card">
//       <img
//         className="CardImg"
//         width={200}
//         height={200}
//         src={Img_URL}
//         alt="Pizza"
//       />

//       <h5>{Title} </h5>
//       <div className="cardButt"></div>
//       <div className="Price"></div>
//       <div>
//         <div>
//           <span>Price:</span>
//           <b>${Price}</b>
//         </div>
//         <button className="cartButton" onClick={handleCart}>
//           <img width={20} height={20} src="img/deleteCart.png" alt="Cart" />
//         </button>
//       </div>
//     </div>
//   );
// }
// export default CartItem;

function CartItem({ id, Title, Price, Img_URL, count, handleCart }) {
  const [isDeleting, setIsDeleting] = useState(false);

  // const handleCart = async () => {
  //   setIsDeleting(true);
  //   try {
  //     await axios.delete(`https://localhost:7160/Cart/${id}`);
  //     setIsDeleting(false);
  //   } catch (error) {
  //     setIsDeleting(false);
  //     // Handle error if deletion fails
  //     alert("Ошибка при удалении из карзины");
  //   }
  // };

  return (
    <div className="card">
      <img
        className="CardImg"
        width={200}
        height={200}
        src={Img_URL}
        alt="Pizza"
      />
      <h5>{Title} </h5>
      <div className="cardButt"></div>
      <div className="Price"></div>
      <div>
        <div>
          <span>Price:</span>
          <b>${Price}</b>
        </div>
        <button className="cartButton" onClick={() => handleCart(id)}>
          <img width={20} height={20} src="img/deleteCart.png" alt="Cart" />
        </button>
        <span>Количество: {count}шт.</span>
      </div>
    </div>
  );
}

export default CartItem;
