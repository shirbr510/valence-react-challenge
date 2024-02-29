import { useState } from "react";

function useCounter(defaultValue) {
  const [count, setCount] = useState(defaultValue || 0)

  const increment = (amount = 1) => {
    setCount(x => x + amount)
  }
  
  return {count, setCount, increment}
}

export default useCounter