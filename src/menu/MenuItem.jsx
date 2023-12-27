import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import { formatCurrency } from "../utilties/helpers";
import { addItem } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  // Use useSelector to check if the item is in the cart and get its quantity
  const cartItem = useSelector((state) =>
    state.cart.cart.find((item) => item.pizzaId === id)
  );
  const isInCart = cartItem !== undefined;
    const cartQuantity = cartItem ? cartItem.quantity : 0;

  // Define a function to handle adding the item to the cart
  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex-grow flex flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {/* Conditionally render DeleteItem if the item is in the cart */}
          {isInCart && (
            <div className="flex items-center gap-4  ">
              <DeleteItem pizzaId={id} />
              <UpdateItemQuantity pizzaId={id} cartQuantity={cartQuantity} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
