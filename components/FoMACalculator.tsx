"use client";

import { useState, useEffect } from "react";

export default function FoMACalculator() {
  const [fom, setFom] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    calculateFoMA();
  }, [fom, area]);

  const calculateFoMA = () => {
    const fomNum = parseFloat(fom);
    const areaNum = parseFloat(area);

    if (isNaN(fomNum) || isNaN(areaNum) || areaNum <= 0) {
      setResult("");
      return;
    }

    const foma = fomNum + 10 * Math.log10(1 / areaNum);
    setResult(`FoMA = ${foma.toFixed(2)} dB`);
  };

  return (
    <div className="calculator-card">
      <h2>FoMA Calculator</h2>
      <p>Formula: FoMA = FoM + 10×log₁₀(1mm²/Area)</p>

      <div className="input-group">
        <label>FoM:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter FoM"
          value={fom}
          onChange={(e) => setFom(e.target.value)}
        />
        <span>dB</span>
      </div>

      <div className="input-group">
        <label>Area:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <span>mm²</span>
      </div>

      <div className="result">
        {result ? (
          <div className="result-value">{result}</div>
        ) : (
          <div className="result-empty">Enter values to calculate</div>
        )}
      </div>
    </div>
  );
}
