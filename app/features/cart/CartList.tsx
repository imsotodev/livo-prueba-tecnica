import type { Item } from "~/common/entity/cart";
import CartItem from "./CartItem";

interface Props {
  items: Item[];
}

function CartList({ items }: Props) {
  return (
    <ul className="flex flex-col  mt-5">
      {items.map((item) => (
        <li key={item.item_id} className="flex border-b border-primary/50">
          <CartItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default CartList;
