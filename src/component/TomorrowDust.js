import TomorrowDustdata from "./TomorrowDustdata";
import TomorrowDustTitle from "./TomorrowDustTitle";

function TomorrowDust({ airforecast }) {
	return (
		<div className="dust">
			<TomorrowDustTitle />
			<TomorrowDustdata airforecast={airforecast} />
		</div>
	);
}

export default TomorrowDust;