
import React from "react";
import "./styles/Button.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (
    <div className="show-btn">
      <button className="btn2 exp" onClick={inputHandler}>
        ^
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        (
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        )
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        √
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        x<sup>2</sup>
      </button>
      <button className="btn2 clr" onClick={clearInput}>
        AC
      </button>
      <button className="btn2 clr" onClick={backspace}>
        ⌫
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        log
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        ÷
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        %
      </button>
      <button className="btn2" onClick={inputHandler}>
        7
      </button>
      <button className="btn2" onClick={inputHandler}>
        8
      </button>
      <button className="btn2" onClick={inputHandler}>
        9
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        x
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      <button className="btn2" onClick={inputHandler}>
        4
      </button>
      <button className="btn2" onClick={inputHandler}>
        5
      </button>
      <button className="btn2" onClick={inputHandler}>
        6
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        -
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      <button className="btn2" onClick={inputHandler}>
        1
      </button>
      <button className="btn2" onClick={inputHandler}>
        2
      </button>
      <button className="btn2" onClick={inputHandler}>
        3
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        +
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        !
      </button>
      <button className="btn2 exp" onClick={changePlusMinus}>
        ±
      </button>
      <button className="btn2" onClick={inputHandler}>
        0
      </button>
      <button className="btn2 exp" onClick={inputHandler}>
        .
      </button>
      <button className="btn2 exp equal" id="equalbtn" onClick={calculateAns}>
        =
      </button>
    </div>
  );
};

export default Buttons;
