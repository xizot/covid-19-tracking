import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
	loading: {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "100vh",
		zIndex: "999999",
		overflow: "hidden",
		backgroundColor: "#f1f5f8",
	},
	content: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	line: {
		display: "block",
		width: 250,
		height: 1,
		backgroundColor: "transparent",
		position: "relative",
		"&::before": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 0,
			backgroundColor: "#3f51b5",
			height: "100%",
			width: "0%",
			animation: "$right 3s linear forwards",
		},
	},
	"@keyframes right": {
		"0%": {
			width: 0,
		},
		"100%": {
			width: "100%",
		},
	},
});
function Loading() {
	const styles = useStyles();
	return (
		<span className={styles.loading}>
			<span className={styles.content}>
				<span className={styles.line}></span>
			</span>
		</span>
	);
}

export default Loading;
