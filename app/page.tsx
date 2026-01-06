import PLLCalculator from "@/components/PLLCalculator";
import VCOCalculator from "@/components/VCOCalculator";
import NormalizedPNCalculator from "@/components/NormalizedPNCalculator";

export default function Home() {
  return (
    <div className="container">
      <h1>RF Calculators</h1>
      <div className="calculators-grid">
        <PLLCalculator />
        <VCOCalculator />
        <NormalizedPNCalculator />
      </div>
    </div>
  );
}
