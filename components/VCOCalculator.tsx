"use client";

import { useState, useEffect } from "react";

export default function VCOCalculator() {
  const [freq, setFreq] = useState<string>("");
  const [power, setPower] = useState<string>("");
  const [pn, setPn] = useState<string>("");
  const [offset, setOffset] = useState<string>("");
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    calculateFOM();
  }, [freq, power, pn, offset]);

  const calculateFOM = () => {
    const freqNum = parseFloat(freq);
    const powerNum = parseFloat(power);
    const pnNum = parseFloat(pn);
    const offsetNum = parseFloat(offset);

    if (
      isNaN(freqNum) ||
      isNaN(powerNum) ||
      isNaN(pnNum) ||
      isNaN(offsetNum) ||
      freqNum <= 0 ||
      powerNum <= 0 ||
      offsetNum <= 0
    ) {
      setResult("");
      return;
    }

    const fom =
      -pnNum -
      10 * Math.log10(powerNum) -
      20 * Math.log10(offsetNum / freqNum / 1e9);
    setResult(`FOM = ${fom.toFixed(2)} dB`);
  };

  return (
    <div className="calculator-card">
      <h2>VCO FOM Calculator</h2>
      <p>Formula: FOM = -PN - 10×log₁₀(power) - 20×log₁₀(offset/freq/1e9)</p>

      <div className="input-group">
        <label>Frequency:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter frequency"
          value={freq}
          onChange={(e) => setFreq(e.target.value)}
        />
        <span>GHz</span>
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

      <div className="input-group">
        <label>Phase Noise:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter phase noise"
          value={pn}
          onChange={(e) => setPn(e.target.value)}
        />
        <span>dBc/Hz</span>
      </div>

      <div className="input-group">
        <label>Offset:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter offset"
          value={offset}
          onChange={(e) => setOffset(e.target.value)}
        />
        <span>Hz</span>
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
