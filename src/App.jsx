import { useState } from "react";
import Board from "./Board";

function App() {
  return (
    <div className="">
      <h1 className="text-3xl bg-gray-400 font-bold text-center p-2">
        Tic tac toe
      </h1>
      <div className="flex bg-blue-500 justify-center items-center h-screen">
        <Board />
      </div>
    </div>
  );
}

export default App;
