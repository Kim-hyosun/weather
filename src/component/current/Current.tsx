import { Air } from "../../asset/index";

import Dust from "./Dust";
import Weather from "./Weather";

function Current() {
  const { data: currentAir, error } = Air();
  return (
    <>
      <Weather />
      {error ? (
        <div className="dataError">미세먼지 정보를 불러오지 못했습니다.</div>
      ) : (
        <Dust currentAir={currentAir} />
      )}
    </>
  );
}

export default Current;
