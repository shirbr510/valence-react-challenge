import { memo, useCallback, useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const increment = useCallback(() => setValue(value + 1), [value, setValue]);
  return <button onClick={increment}>{value}</button>

}

export default memo(Counter)