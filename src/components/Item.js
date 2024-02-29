import { memo, useCallback, useRef } from "react";
import Counter from "./Counter";
import TEXTS from "../Texts";

function Item({id, onDeleteClick}) {
  const handleDeleteClick = useCallback(() => onDeleteClick(id),[onDeleteClick, id])
  return (
    <li>
      <Counter/>
      <button onClick={handleDeleteClick}>{TEXTS.DELETE}</button>
    </li>
  )

}

export default memo(Item)