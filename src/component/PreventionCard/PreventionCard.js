import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
	root: {
		textAlign: "center",
		padding: "30px 10px 14px",
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
		color: "#2c98de",
	},
	content: {
		fontSize: "16px",
		color: "#666",
		lineHeight: "1.75rem",
	},
});
function PreventionCard({ title, imgSrc, content }) {
	const styles = useStyles();
	return (
		<Card className={styles.root}>
			<img src={imgSrc} alt="" className={styles.image} />
			<CardContent>
				<Typography variant="h4" className={styles.title}>
					{title}
				</Typography>
				<Typography
					variant="body2"
					component="p"
					className={styles.content}
				>
					{content}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default PreventionCard;
