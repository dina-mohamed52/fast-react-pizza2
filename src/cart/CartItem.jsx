
import { useSelector } from "react-redux";
import { formatCurrency } from "../utilties/helpers";

import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const cartItem = useSelector((state) =>
    state.cart.cart.find((item) => item.pizzaId === pizzaId)
  );
  // const isInCart = cartItem !== undefined;
  const cartQuantity = cartItem ? cartItem.quantity : 0;
  return (
    <ul className="  py-2 px-2  flex items-center justify-between   ">
      <p className="font-semibold text-lg mb-4 ">
        {quantity}&times; {name}
      </p>
      <div className=" gap-6 flex items-center justify-between text-sm text-stone-700 font-semibold">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} cartQuantity={cartQuantity} />
        <DeleteItem />
      </div>
     
    </ul>
  );
}

export default CartItem;
