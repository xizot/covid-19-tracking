import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
	root: {
		textAlign: "center",
		padding: "30px 0 14px",
		height: "100%",
	},
	image: {
		display: "block",
		margin: "0 auto",
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#333",
	},
	percent: {
		fontSize: 24,
		color: "#2c98de",
	},
});
function SignCard({ title, imgSrc, percent }) {
	const styles = useStyles();
	return (
		<Card className={styles.root}>
			<img src={imgSrc} alt="" className={styles.image} />
			<CardContent>
				<Typography variant="h4" className={styles.title}>
					{title}
				</Typography>
				<Typography
					variant="h3"
					component="p"
					className={styles.percent}
				>
					{percent}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default SignCard;
