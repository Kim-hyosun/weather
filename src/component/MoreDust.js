import MoreDustdata from "./MoreDustdata";
import MoreDustTitle from "./MoreDustTitle";

function MoreDust({dustdata}) {
	return (
		<div className="dust">
			<MoreDustTitle />
			<MoreDustdata dustdata={dustdata} />
		</div>
	);
}

export default MoreDust;