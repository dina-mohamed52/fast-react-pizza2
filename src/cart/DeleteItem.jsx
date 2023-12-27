import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  // Modify the onClick handler to pass the pizzaId to the deleteItem action
  const handleDelete = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteItem;
