import { useState } from "react";
import { Button } from "reactstrap";
import Content from "./Content";

const Memo = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <Content counter={counter}/>
      <h2>{counter}</h2>
      <Button color="danger" onClick={handleCounter}>
        Counter +
      </Button>
    </>
  );
};

export default Memo;
