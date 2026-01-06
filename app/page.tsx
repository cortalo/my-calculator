import PLLCalculator from "@/components/PLLCalculator";
import VCOCalculator from "@/components/VCOCalculator";
import NormalizedPNCalculator from "@/components/NormalizedPNCalculator";
import FoMACalculator from "@/components/FoMACalculator";

export default function Home() {
  return (
    <div className="container">
      <h1>RF Calculators</h1>
      <div className="calculators-grid">
        <PLLCalculator />
        <VCOCalculator />
        <NormalizedPNCalculator />
        <FoMACalculator />
      </div>
    </div>
  );
}
