import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./NewCalculator.css";

const NewCalculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };


  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="bcg">
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
      <button className="clear" onClick={handleClear}>
          C
        </button>

        <button className="btn"  onClick={() => handleClick("(")}>(</button>
        <button className="btn" onClick={() => handleClick(")")}>)</button>
        <button className="btn" onClick={() => handleClick("+")}>+</button>
        <button className="btn" onClick={() => handleClick("7")}>7</button>
        <button className="btn" onClick={() => handleClick("8")}>8</button>
        <button className="btn" onClick={() => handleClick("9")}>9</button>
        <button className="btn" onClick={() => handleClick("/")}>÷</button>
        <button className="btn" onClick={() => handleClick("4")}>4</button>
        <button className="btn" onClick={() => handleClick("5")}>5</button>
        <button className="btn" onClick={() => handleClick("6")}>6</button>
        <button className="btn" onClick={() => handleClick("*")}>×</button>
        <button className="btn" onClick={() => handleClick("1")}>1</button>
        <button className="btn" onClick={() => handleClick("2")}>2</button>
        <button className="btn" onClick={() => handleClick("3")}>3</button>
        <button className="btn" onClick={() => handleClick("-")}>-</button>
        <button className="zero" onClick={() => handleClick("0")}>0</button>
        <button className="btn" onClick={() => handleClick(".")}>,</button>
        <button className="equals" onClick={handleCalculate}>
          =
        </button>
       
     
      </div>
    </div>
    </div>
  );
};

export default NewCalculator;
