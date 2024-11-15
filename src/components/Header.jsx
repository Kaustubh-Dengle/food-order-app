import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import ReUButton from "./UI/ReUButton";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart()
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant image" />
        <h1>Pune Eats</h1>
      </div>
      <nav>
        <ReUButton textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </ReUButton>
      </nav>
    </header>
  );
}
