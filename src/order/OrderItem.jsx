import { formatCurrency } from "../utilties/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-2">
      <div className="flex items-center justify-between gap-4">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
        <p className="text-sm text-stone-500 sm:space-x-4 italic font-semibold capitalize" >
          {isLoadingIngredients ? (
            "Loading..."
            ) : ingredients && ingredients.length > 0 ? (
              ingredients.join(",  ")
              ) : (
                "No ingredients available"
                )}
                </p>
    </li>
  );
}
export default OrderItem