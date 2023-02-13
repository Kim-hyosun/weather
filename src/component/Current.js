import { Air } from "../asset/index";

import Dust from "./Dust";
import Weather from "./Weather";

function Current() {
  const currentAir = Air();
  return (
    <>
      <Weather />
      <Dust currentAir={currentAir} />
    </>
  );
}

export default Current;