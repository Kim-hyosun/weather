import DustTitle from "./DustTitle";
import DustData from "./DustData";

function Dust({ currentAir }) {
  return (
    <div className="dust">
      <DustTitle />
      <DustData currentAir={currentAir} />
    </div>
  );
}

export default Dust;