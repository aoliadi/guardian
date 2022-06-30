import { useEffect, useState } from "react";

function useRandom(arr, amountOfExtract) {
  const [randomNumber, setRandomNumber] = useState();
  const [chosenItem, setChosenItem] = useState();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    const chosenItem = arr[randomNumber];
    // arr.splice(randomNumber, amountOfExtract);

    setRandomNumber(randomNumber);
    setChosenItem(chosenItem);
  }, []);

  return [chosenItem, arr];
}

export default useRandom;
