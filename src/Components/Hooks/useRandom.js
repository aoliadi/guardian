import { useEffect, useState } from "react";

function useRandom(maxVal) {
  const [randomNumber, setRandomNumber] = useState();
  // let randomNumber;
  useEffect(() => {
    const randomNumber = Math.ceil(Math.random() * maxVal);
    setRandomNumber(randomNumber);
  }, [maxVal]);

  return randomNumber;
}

export default useRandom;
