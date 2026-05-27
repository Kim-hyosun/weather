import DustTitle from "./DustTitle";
import DustData from "./DustData";
import DustInfo from "../DustInfo";

function Dust({ currentAir }: { currentAir: number[] }) {
  return (
    <div className="dust">
      <DustTitle />
      <DustData currentAir={currentAir} />
      <DustInfo />
    </div>
  );
}

export default Dust;