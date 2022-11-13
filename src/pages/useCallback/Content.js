import React, { memo } from "react";
import { Button } from "reactstrap";

const Content = ({onCouter}) => {
  console.log("re-render");
  return (
    <>
      <h1>React Front-end 24</h1>
      <Button color="danger" onClick={onCouter}>
        Counter +
      </Button>
      ;
    </>
  );
};

export default memo(Content);
//  ===
// abc === ab => false