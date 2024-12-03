import React, { useState } from "react";

const NumberToWords = () => {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  // Helper function to convert number to words
  const convertToWords = (num) => {
    const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    const scales = ["", "thousand", "million", "billion"];

    if (num === 0) return "zero";

    const numStr = num.toString();
    if (numStr.length > 12) return "Number too large";

    const numParts = [];
    while (num > 0) {
      numParts.push(num % 1000);
      num = Math.floor(num / 1000);
    }

    let words = [];
    for (let i = 0; i < numParts.length; i++) {
      let partWords = [];
      const n = numParts[i];

      if (n >= 100) {
        partWords.push(ones[Math.floor(n / 100)]);
        partWords.push("hundred");
      }

      const remainder = n % 100;
      if (remainder > 0 && remainder < 20) {
        partWords.push(ones[remainder]);
      } else if (remainder >= 20) {
        partWords.push(tens[Math.floor(remainder / 10)]);
        if (remainder % 10 > 0) {
          partWords.push(ones[remainder % 10]);
        }
      }

      if (partWords.length > 0) {
        words = [...partWords, scales[i], ...words];
      }
    }

    return words.join(" ").trim();
  };

  const handleNtoW = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setNumber(value);
      setText(value ? convertToWords(parseInt(value)) : "");
    }
  };

  return (
    <div>

      {/* First Input Field */}
      <div>
        <input
          type="text"
          placeholder="Enter first number"
          value={numbers.first}
          onChange={(e) => handleChange('first', e.target.value)}
        />
        <div>
          {texts.first}
        </div>
      </div>

      {/* Second Input Field */}
      <div>
        <input
          type="text"
          placeholder="Enter second number"
          value={numbers.second}
          onChange={(e) => handleChange('second', e.target.value)}
        />
        <div>
          {texts.second}
        </div>
      </div>
    </div>
  );
};

export default NumberToWords;
