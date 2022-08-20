import React, { useState } from "react";
import Button from "../Button/Button";
import "./calculator.css";

function Calculator() {
  const [number, setNumber] = useState([]);
  const [sign, setSign] = useState([]);
  const Number = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "/", 0, "="];

  const getNumber = (data) => {
    if (typeof data === "number") {
      if (sign.length > 0) {
        if (number.length > 1) {
          let copy = [...number];
          copy[1] = copy[1] * 10 + data;
          return setNumber(copy);
        } else {
          let copy = [...number];
          copy.push(data);
          return setNumber(copy);
        }
      }
      if (number.length === 0) {
        return setNumber([data]);
      }
      let copy = [...number];
      copy[0] = copy[0] * 10 + data;
      setNumber(copy);
    } else {
      if (sign.length > 0) {
        let sum = calculate();
        setNumber([sum]);
        return setSign([]);
      }
      return setSign([data]);
    }
  };
  const calculate = () => {
    let copy = [...number];
    let firstNum = copy[0];
    let secondNum = copy[1];
    switch (sign[0]) {
      case "+":
        return firstNum + secondNum;
      case "-":
        return firstNum - secondNum;
      case "*":
        return firstNum * secondNum;
      case "/":
        return firstNum / secondNum;
    }
  };
  console.log(number);
  return (
    <div>
      <div className="calculator-screen">
        {number[0] ? number[0] : null}
        {sign[0] ? sign[0] : null}
        {number[1] ? number[1] : null}
      </div>
      <div className="number-container">
        {Number.map((item, index) => {
          return (
            <Button
              key={index}
              onclickHandler={getNumber}
              text={item}
              btnStyle={"btn-white"}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Calculator;
