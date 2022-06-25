import { useEffect, useState } from "react";

function useRandom(range) {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.ceil(Math.random() * range));
  }, [range]);

  return randomNumber;
}

export default useRandom;
