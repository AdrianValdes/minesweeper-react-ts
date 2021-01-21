import React from "react";
import "./NumbersDisplay.scss";

interface NumbersDisplayProps {
  value: number;
}

const NumbersDisplay = ({ value }: NumbersDisplayProps) => {
  return (
    <div className="NumbersDisplay">{value.toString().padStart(3, "0")}</div>
  );
};

export default NumbersDisplay;
