import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className=" px-4 py-4">
      <Link
        to="/menu"
        className=" text-sm text-blue-500  hover:text-blue-700 hover:underline "
      >
        &larr; Back to menu
      </Link>
      <p className="font-semibold mt-4">
        Your cart is still empty. Start adding some pizzas 🍕🍕
      </p>
    </div>
  );
}

export default EmptyCart;
