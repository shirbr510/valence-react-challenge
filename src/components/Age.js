import { memo, useEffect, useRef, useState } from "react";

const MS_IN_SECOND = 1000

function Age({maxAge, onMaxAge}) {
  const [age, setAge] = useState(0);
  const creationTimeRef = useRef(Date.now());
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateAge = () => {
      const currentTime = Date.now();
      const ageInMs = currentTime - creationTimeRef.current;
      setAge(Math.floor(ageInMs / MS_IN_SECOND));
    }

    intervalRef.current = setInterval(updateAge, MS_IN_SECOND);
    return () => {
      if(intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if(age >= maxAge) {
      onMaxAge()
    }
  },[age])
  
  return <span>{age}</span>

}

export default memo(Age)