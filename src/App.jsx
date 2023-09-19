import React, { useState, useEffect } from "react";
import "./App.css";

function Textarea({ index, value, onChange }) {
  return (
    <textarea
      name=""
      className="Textarea"
      cols="5"
      rows="3"
      placeholder={`${index + 1}.`}
      value={value}
      onChange={(e) => onChange(index, e.target.value)}
    ></textarea>
  );
}

function AMBCalculator() {
  const [ambRequired, setAmbRequired] = useState("");
  const [totalClosingBalance, setTotalClosingBalance] = useState(0);
  const [averageMonthlyBalance, setAverageMonthlyBalance] = useState(0);
  const [
    isAverageMonthlyBalanceMaintained,
    setIsAverageMonthlyBalanceMaintained,
  ] = useState("no");
  const [textareaValues, setTextareaValues] = useState(Array(31).fill(""));

  useEffect(() => {
    updateTotalClosingBalance();
  }, [textareaValues, ambRequired]);

  const updateTotalClosingBalance = () => {
    const totalBalance = textareaValues.reduce(
      (sum, value) => sum + parseFloat(value || 0),
      0
    );
    setTotalClosingBalance(totalBalance.toFixed(2));
    setAverageMonthlyBalance((totalBalance / 30).toFixed(2));

    if (parseFloat(totalBalance / 30) > parseFloat(ambRequired)) {
      setIsAverageMonthlyBalanceMaintained("yes");
    } else {
      setIsAverageMonthlyBalanceMaintained("no");
    }
  };

  const handleInputChange = (index, value) => {
    const updatedTextareaValues = [...textareaValues];
    updatedTextareaValues[index] = value;
    setTextareaValues(updatedTextareaValues);
  };

  const renderTextareas = () => {
    const textareas = [];

    for (let i = 0; i < textareaValues.length; i += 7) {
      const row = [];
      for (let j = i; j < i + 7 && j < textareaValues.length; j++) {
        row.push(
          <Textarea
            key={j}
            index={j}
            value={textareaValues[j]}
            onChange={handleInputChange}
          />
        );
      }
      textareas.push(
        <div key={i} className="row">
          {row}
        </div>
      );
    }

    return textareas;
  };

  return (
    <div className="container">
      <h1 id="title">AMB Calculator</h1>
      <div id="calanderContainer">
        <div>
          <h2>AMB required=</h2>
          <textarea
            name=""
            id="ambRequired"
            cols="5"
            rows="1.5"
            value={ambRequired}
            onChange={(e) => setAmbRequired(e.target.value)}
          ></textarea>
          <div></div>
          <br />
          {renderTextareas()}
        </div>
      </div>
      <br />
      <div id="summary">
      <div>
      <h2>Total Closing Balance=</h2>
      <h2 id="totalClosingBalance">{totalClosingBalance}</h2>
      <div></div>
      <h2>Average Monthly Balance=</h2>
      <h2 id="averageMonthlyBalance">{averageMonthlyBalance}</h2>
      <div></div>
      <h2>Average Monthly Balance maintained=</h2>
      <h2 id="isAverageMonthlyBalanceMaintained">
        {isAverageMonthlyBalanceMaintained}
      </h2>
        </div>
        </div>
    </div>
  );
}

export default AMBCalculator;
