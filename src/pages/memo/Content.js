import React, { memo } from "react";

const Content = ({counter}) => {
  console.log("re-render");
  return <h1>React Front-end 24{counter}</h1>;
};

export default memo(Content);
