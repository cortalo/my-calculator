"use client";

import { useState, useEffect } from "react";

export default function PLLCalculator() {
  const [jitter, setJitter] = useState<string>("");
  const [power, setPower] = useState<string>("");
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    calculateFOM();
  }, [jitter, power]);

  const calculateFOM = () => {
    const jitterNum = parseFloat(jitter);
    const powerNum = parseFloat(power);

    if (
      isNaN(jitterNum) ||
      isNaN(powerNum) ||
      jitterNum <= 0 ||
      powerNum <= 0
    ) {
      setResult("");
      return;
    }

    const fom = 20 * Math.log10(jitterNum * 1e-15) + 10 * Math.log10(powerNum);
    setResult(`FOM = ${fom.toFixed(2)} dB`);
  };

  return (
    <div className="calculator-card">
      <h2>PLL FOM Calculator</h2>
      <p>Formula: FOM = 20×log₁₀(jitter×10⁻¹⁵) + 10×log₁₀(power)</p>

      <div className="input-group">
        <label>Jitter:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter jitter"
          value={jitter}
          onChange={(e) => setJitter(e.target.value)}
        />
        <span>fs</span>
      </div>

      <div className="input-group">
        <label>Power:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter power"
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />
        <span>mW</span>
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
