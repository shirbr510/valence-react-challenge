import { memo, useEffect } from "react";
import { useAge } from "./hooks";

function Age({maxAge, onMaxAge}) {
  const age = useAge(maxAge)
  useEffect(() => {
    if(age >= maxAge) {
      onMaxAge()
    }
  },[age, maxAge, onMaxAge])
  
  return <span>{age}</span>

}

export default memo(Age)