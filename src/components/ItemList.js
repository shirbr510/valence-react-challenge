import { memo, useCallback, useState } from "react";
import Item from "./Item";
import TEXTS from "../Texts";


function ItemList() {
  const [items, setItems] = useState([]);
  // I chose crypto.randomUUID() as I wanted to identify each item in a unique and rnadomly generated way
  const addItem = useCallback(() => setItems([...items, crypto.randomUUID()]), [items])
  const deleteItem = useCallback((id) => setItems(items.filter(item => item !== id)), [items])

  return (
    <div>
      <button onClick={addItem}>{TEXTS.ADD}</button>
      <ul>
        {items.map(item => <Item key={item} id={item} onDeleteItem={deleteItem}/>)}
      </ul>
    </div>
  )

}

export default memo(ItemList)