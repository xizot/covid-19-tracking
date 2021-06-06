import { makeStyles } from "@material-ui/core";
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
			{summary.map((item, index) => {
				return (
					<div className={styles.highLight} key={index}>
						<HighLightCart
							title={item.title}
							count={item.count}
							type={item.type}
						/>
					</div>
				);
			})}
		</>
	);
}

export default HighLight;
