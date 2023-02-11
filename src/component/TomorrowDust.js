import TomorrowDustdata from "./TomorrowDustdata";
import TomorrowDustTitle from "./TomorrowDustTitle";

function TomorrowDust({ data }) {
	return (
		<div className="dust">
			<TomorrowDustTitle />
			<TomorrowDustdata />
		</div>
	);
}

export default TomorrowDust;