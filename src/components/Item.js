import { memo, useCallback } from "react";
import Counter from "./Counter";
import TEXTS from "../Texts";
import Age from "./Age";

const ITEM_TTL = 60;

function Item({ id, onDeleteItem }) {
  const deleteItem = useCallback(() => onDeleteItem(id),[onDeleteItem, id])
  return (
    <li>
      <Age maxAge={ITEM_TTL} onMaxAge={deleteItem} />
      <Counter/>
      <button onClick={deleteItem}>{TEXTS.DELETE}</button>
    </li>
  )

}

export default memo(Item)