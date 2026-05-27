import DustInfo from "../DustInfo";
import MoreDustdata from "./MoreDustdata";
import MoreDustTitle from "./MoreDustTitle";

function MoreDust({ dustdata }: { dustdata: number[] }) {
	return (
		<div className="dust">
			<MoreDustTitle />
			<MoreDustdata dustdata={dustdata} />
			<DustInfo />
		</div>
	);
}

export default MoreDust;