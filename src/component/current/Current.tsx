import Dust from "./Dust";
import Weather from "./Weather";
import { useCurrentAqi } from "../../hooks/useAqi";
import Loading from "../../shared/Loading";
import ErrorMessage from "../../shared/Error";

function Current() {
  const { data: currentAir, isLoading, isError } = useCurrentAqi();
  return (
    <>
      <Weather />
      {isLoading ? <Loading /> : isError ? <ErrorMessage /> : <Dust currentAir={currentAir} />}
    </>
  );
}

export default Current;
