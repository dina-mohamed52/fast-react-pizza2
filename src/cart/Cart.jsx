import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];
function Cart() {
  const cart = useSelector((state)=>state.cart.cart)
  const username = useSelector( ( state ) => state.user.username );
  const dispatch = useDispatch()
  
   if(!cart.length) return <EmptyCart/>
   function handleClearCart ()
  {
    dispatch(clearCart());
  }
  return (
    <div className="mx-4 my-4 ">
      <Link
        to="/menu"
        className=" text-sm text-blue-500  hover:text-blue-700 hover:underline "
      >
        &larr; Back to menu
      </Link>

      <h2 className="py-4 text-xl font-semibold px-2 tracking-wide ">
        Your cart , {username}
      </h2>
      <ul className=" mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem
            key={item.pizzaId}
            item={item}
           
          />
        ))}
      </ul>
      <div className="my-6 py-4">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secandry" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
