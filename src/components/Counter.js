import { memo } from "react";
import { useCounter } from "./hooks";

function Counter() {
  const {count, increment} = useCounter(0);
  return <button onClick={increment}>{count}</button>

}

export default memo(Counter)