import {
	Card,
	CardContent,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
const useStyles = makeStyles({
	wrapper: (props) => {
		if (props.type === "confirmed")
			return {
				background: "linear-gradient(180deg,#4a00e0,rgba(74,0,224,.8))",
			};
		if (props.type === "recovered")
			return {
				background:
					"linear-gradient(180deg,#04d39f,rgba(4,211,159,.7))",
			};
		else
			return {
				background:
					"linear-gradient(180deg,#fe2828,rgba(254,40,40,.7))",
			};
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 7,
		color: "#fff",
		textTransform: "uppercase",
	},
	count: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#fff",
	},
});
function HighLightCart({ title, count, type }) {
	const styles = useStyles({ type });
	return (
		<Grid item sm={4} xs={12}>
			<Card className={styles.wrapper}>
				<CardContent>
					<Typography
						component="p"
						variant="body2"
						className={styles.title}
					>
						{title}
					</Typography>
					<Typography
						component="p"
						variant="body2"
						className={styles.count}
					>
						<CountUp end={count || 0} duration={2} separator="," />
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default HighLightCart;
