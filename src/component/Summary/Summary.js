import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { LineChart, HighMap } from "..";
import { getMapDataByCountryId } from "../../apis";

function Summary({ report, selectedCountryId }) {
	const [mapData, setMapData] = useState({});

	useEffect(() => {
		if (selectedCountryId) {
			getMapDataByCountryId(selectedCountryId)
				.then((res) => {
					setMapData(res);
				})
				.catch((err) => console.log({ err }));
		}
	}, [selectedCountryId]);
	return (
		<>
			<Grid container spacing={3}>
				<Grid item sm={8} xs={12}>
					<LineChart data={report} />
				</Grid>
				<Grid item sm={4} xs={12}>
					<HighMap mapData={mapData} />
				</Grid>
			</Grid>
		</>
	);
}

export default Summary;
