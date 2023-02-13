import DustInfo from "./DustInfo";
import TodayDustdata from "./TodayDustdata";
import TodayDustTitle from "./TodayDustTitle";

function TodayDust({currentAir}) {
	return (
		<div className="dust">
			<TodayDustTitle />
			<TodayDustdata currentAir={currentAir} />
			<DustInfo />
		</div>
	);
}

export default TodayDust;