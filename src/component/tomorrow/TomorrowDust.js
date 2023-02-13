import DustInfo from "../DustInfo";
import TomorrowDustdata from "./TomorrowDustdata";
import TomorrowDustTitle from "./TomorrowDustTitle";

function TomorrowDust({ airforecast }) {
	return (
		<div className="dust">
			<TomorrowDustTitle />
			<TomorrowDustdata airforecast={airforecast} />
			<DustInfo />
		</div>
	);
}

export default TomorrowDust;