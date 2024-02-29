import { memo, useCallback, useRef } from "react";
import Counter from "./Counter";
import TEXTS from "../Texts";

function Item({ id, onDeleteItem }) {
  const deleteItem = useCallback(() => onDeleteItem(id),[onDeleteItem, id])

  return (
    <li>
      <Counter/>
      <button onClick={deleteItem}>{TEXTS.DELETE}</button>
    </li>
  )

}

export default memo(Item)