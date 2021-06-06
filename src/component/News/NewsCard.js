import {
	Card,
	CardContent,
	Link,
	makeStyles,
	Typography,
} from "@material-ui/core";
import moment from "moment";
import React from "react";
const useStyles = makeStyles({
	root: {},
	media: {
		height: 140,
	},
	image: {
		height: 150,
		display: "flex",
		"& a": {
			width: "100%",
			display: "block",
			textAlign: "center",
		},
		"& img": {
			width: "100%",
			maxHeight: "100%",

			objectFit: "cover",
		},
	},
	title: {
		fontSize: 16,
		marginBottom: 5,
		color: "#2c98de",
		textShadow: "1px 1px 0 rgb(0 0 0 / 20%)",
		fontWeight: 500,
	},
	date: {
		fontSize: 13,
		marginBottom: 10,
		color: "#333",
	},
	content: {
		fontSize: 16,
		color: "#333",
		display: "-webkit-box",
		"-webkit-line-clamp": 4,
		"-webkit-box-orient": "vertical",
		overflow: "hidden",
		textShadow: "1px 1px 0 rgb(0 0 0 / 20%)",
	},
});

// const textTruncate = (text, length) => {
// 	return text.toString().substring(0, length) + "...";
// };
function NewsCard({ title, imgSrc, content, link, date }) {
	const styles = useStyles();
	return (
		<Card className={styles.root}>
			<div
				className={styles.image}
				dangerouslySetInnerHTML={{ __html: imgSrc }}
			/>
			<CardContent>
				<Link href={link}>
					<Typography
						variant="h3"
						component="h3"
						className={styles.title}
					>
						{title}
					</Typography>
				</Link>
				<Typography
					variant="body2"
					component="span"
					className={styles.date}
				>
					{moment(date).format("DD/MM/YYYY")}
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

export default NewsCard;
