import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import HighLightCart from "./HighLightCart";

const useStyles = makeStyles({
	highLight: {
		marginBottom: 20,
	},
});
function HighLight({ report }) {
	const styles = useStyles();
	const data = report && report.length ? report[report.length - 1] : [];
	const summary = [
		{
			title: "Total case",
			count: data.Confirmed,
			type: "confirmed",
		},
		{
			title: "Recovered",
			count: data.Recovered,
			type: "recovered",
		},
		{
			title: "Total death",
			count: data.Deaths,
			type: "death",
		},
	];
	return (
		<>
			<Grid container spacing={3} className={styles.highLight}>
				{summary.map((item, index) => {
					return (
						<HighLightCart
							key={index}
							title={item.title}
							count={item.count}
							type={item.type}
						/>
					);
				})}
			</Grid>
		</>
	);
}

export default HighLight;
