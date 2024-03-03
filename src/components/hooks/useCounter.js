import { useState } from "react";

function useCounter(defaultValue) {
  const [count, setCount] = useState(defaultValue || 0)

  const increment = () => {
    setCount(x => x + 1)
  }
  
  return {count, setCount, increment}
}

export default useCounter