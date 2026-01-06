"use client";

import { useState, useEffect } from "react";

export default function NormalizedPNCalculator() {
  const [phaseNoise, setPhaseNoise] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [normFreq, setNormFreq] = useState<string>("");
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    calculateNormalizedPN();
  }, [phaseNoise, frequency, normFreq]);

  const calculateNormalizedPN = () => {
    const phaseNoiseNum = parseFloat(phaseNoise);
    const frequencyNum = parseFloat(frequency);
    const normFreqNum = parseFloat(normFreq);

    if (
      isNaN(phaseNoiseNum) ||
      isNaN(frequencyNum) ||
      isNaN(normFreqNum) ||
      frequencyNum <= 0 ||
      normFreqNum <= 0
    ) {
      setResult("");
      return;
    }

    const normalizedPN =
      phaseNoiseNum - 20 * Math.log10(frequencyNum / normFreqNum);
    setResult(`Normalized PN = ${normalizedPN.toFixed(2)} dBc/Hz`);
  };

  return (
    <div className="calculator-card">
      <h2>Normalized Phase Noise Calculator</h2>
      <p>
        Formula: Normalized PN = Phase Noise - 20×log₁₀(frequency/normalized
        frequency)
      </p>

      <div className="input-group">
        <label>Phase Noise:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter phase noise"
          value={phaseNoise}
          onChange={(e) => setPhaseNoise(e.target.value)}
        />
        <span>dBc/Hz</span>
      </div>

      <div className="input-group">
        <label>Frequency:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        />
        <span>Hz</span>
      </div>

      <div className="input-group">
        <label>Normalized Freq:</label>
        <input
          type="number"
          step="any"
          placeholder="Enter normalized frequency"
          value={normFreq}
          onChange={(e) => setNormFreq(e.target.value)}
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
