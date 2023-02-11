import React, { useState } from "react";

// ComponentDescription
function Square(props) {
  return (
    <div
      onClick={props.onClick}
      className="border-2 h-24 w-24 flex justify-center items-center"
    >
      <h3 className="">{props.value}</h3>
    </div>
  );
}

export default Square;
