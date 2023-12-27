import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utilties/helpers";
function CartOverview ()
{
  
  const totalQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const totalPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
  );
if(!totalQuantity) return null
  return (
    <div
      className="bg-stone-800 text-stone-200 uppercase
     p-4  sm:px-8   flex items-center justify-between "
    >
      <p className="text-stone-300 space-x-4 sm:space-x-8  ">
        {/* {totalQuantity} */}
        <span> {totalQuantity} pizzas</span>
        <span> {formatCurrency(totalPrice)} </span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
