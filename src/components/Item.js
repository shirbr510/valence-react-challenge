import { memo, useCallback, useEffect, useRef } from "react";
import Counter from "./Counter";
import TEXTS from "../Texts";
import Age from "./Age";

function Item({ id, onDeleteItem }) {
  const deleteItem = useCallback(() => onDeleteItem(id),[onDeleteItem, id])
  return (
    <li>
      <Age maxAge={60} onMaxAge={deleteItem} />
      <Counter/>
      <button onClick={deleteItem}>{TEXTS.DELETE}</button>
    </li>
  )

}

export default memo(Item)