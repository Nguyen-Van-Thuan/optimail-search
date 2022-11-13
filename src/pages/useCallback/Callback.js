import { useCallback, useState } from "react";
import Content from "./Content";

const Callback = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  return (
    <>
      <Content onCouter={handleCounter} />
      <h2>{counter}</h2>
    </>
  );
};

export default Callback;

// const A = () => {} //tham chiếu C
// const B = () => {} //tham chiếu D

// C === D => False

// useCallback((fn, [dep]))
