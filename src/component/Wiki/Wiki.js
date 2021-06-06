import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PreventionCard from "../PreventionCard/PreventionCard";
import Img1 from "../../Images/1.png";
import Img2 from "../../Images/2.png";
import DetailImg from "../../Images/detail.png";

import SignCard from "../SignCard/SignCard";

const useStyles = makeStyles({
	container: {
		padding: 30,
		borderRadius: 6,
		background: "#fff",
	},
	title: {
		marginBottom: 20,
		fontSize: 22,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 16,
		fontWeight: "bold",
		margin: "20px 0 10px",
	},
	paragraph: {
		fontSize: 16,
		textShadow: "1px 1px 0 rgb(0 0 0 / 20%)",
		lineHeight: "2.2rem",
	},
	originImages: {
		padding: "2px",
		border: "4px double #f1f5f8",
		borderRadius: 4,
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
	mt30: {
		marginTop: 40,
	},
	link: {
		display: "block",
	},
	primary: {
		color: "#2c98de",
	},
	img: {
		maxWidth: "100%",
	},
});

const signGenerate = () => {
	return [
		{
			title: "Hot Ferver",
			imgSrc: require("../../Images/3.png").default,
			percent: "87.9%",
		},
		{
			title: "Cough And Sneezing",
			imgSrc: require("../../Images/4.png").default,
			percent: "67,7%",
		},
		{
			title: "Fatique",
			imgSrc: require("../../Images/5.png").default,
			percent: "38,1%",
		},
		{
			title: "Sputum Production",
			imgSrc: require("../../Images/6.png").default,
			percent: "33,4%",
		},
		{
			title: "Shortness Of Breath",
			imgSrc: require("../../Images/7.png").default,
			percent: "18,6%",
		},
		{
			title: "Strong Headacke",
			imgSrc: require("../../Images/8.png").default,
			percent: "13,6%",
		},
	];
};

const preventionGenerate = () => {
	return [
		{
			title: "Handwashing",
			imgSrc: require("../../Images/9.png").default,
			content:
				"Clean your hands often. Use soap and water, or an alcohol-based hand rub.",
		},
		{
			title: "Safe Distance",
			imgSrc: require("../../Images/10.png").default,
			content:
				"Maintain a safe distance from anyone who is coughing or sneezing",
		},
		{
			title: "Don't Touch",
			imgSrc: require("../../Images/11.png").default,
			content: "Don’t touch your eyes, nose or mouth.",
		},
		{
			title: "Stay Home",
			imgSrc: require("../../Images/12.png").default,
			content: "Stay home if you feel unwell.",
		},
		{
			title: "Call Medical Help",
			imgSrc: require("../../Images/13.png").default,
			content:
				"If you have a fever, cough and difficulty breathing, seek medical attention.",
		},
		{
			title: "Follow Instruction",
			imgSrc: require("../../Images/14.png").default,
			content: "Follow the directions of your local health authority.",
		},
	];
};
function Wiki() {
	const styles = useStyles();
	const signs = signGenerate();
	const preventions = preventionGenerate();

	return (
		<>
			<section className={styles.container}>
				<Typography variant="h3" className={styles.title}>
					Origin
				</Typography>
				<Typography
					component="p"
					variant="body2"
					className={styles.paragraph}
				>
					2019 Novel Coronavirus (2019-nCoV) is a virus (more
					specifically, a coronavirus) identified as the cause of an
					outbreak of respiratory illness first detected in Wuhan,
					China.Early on, many of the patients in the outbreak in
					Wuhan, China reportedly had some link to a large seafood and
					animal market, suggesting animal-to-person spread.However, a
					growing number of patients reportedly have not had exposure
					to animal markets, indicating person-to-person spread is
					occurring.The name coronavirus is derived from the Latin
					corona, meaning "crown" or "halo", which refers to the
					characteristic appearance reminiscent of a crown.
				</Typography>
				<Typography variant="subtitle1" className={styles.subtitle}>
					What does it look likes?
				</Typography>
				<Typography variant="body2" className={styles.paragraph}>
					These images are colorized and from electron microscropes
				</Typography>
				<Grid container spacing={4}>
					<Grid item sx={12} sm={6}>
						<img
							src={Img1}
							alt=""
							className={styles.originImages}
						/>
					</Grid>
					<Grid item sm={6} xs={12}>
						<img
							src={Img2}
							alt=""
							className={styles.originImages}
						/>
					</Grid>
				</Grid>
			</section>
			<section className={`${styles.container} ${styles.mt30}`}>
				<Grid container spacing={5}>
					<Grid item sm={8} xs={12}>
						<Typography variant="h3" className={styles.title}>
							Symptoms
						</Typography>
						<Typography
							component="p"
							variant="body2"
							className={styles.paragraph}
						>
							The most common symptoms of COVID-19 are fever,
							tiredness, and dry cough. Some patients may have
							aches and pains, nasal congestion, runny nose, sore
							throat or diarrhea. These symptoms are usually mild
							and begin gradually. Also the symptoms may appear
							2-14 days after exposure.
						</Typography>
						<Typography
							variant="subtitle1"
							className={styles.subtitle}
						>
							How do I know if I am infected?
						</Typography>
						<Grid container spacing={4}>
							{signs.map((item, index) => (
								<Grid item sm={6} xs={12} key={index}>
									<SignCard
										title={item.title}
										imgSrc={item.imgSrc}
										percent={item.percent}
									/>
								</Grid>
							))}
						</Grid>
						<Typography
							variant="h3"
							className={`${styles.title} ${styles.mt30}`}
						>
							Others Symptoms
						</Typography>
						<Typography
							component="p"
							variant="body2"
							className={styles.paragraph}
						>
							Some patients may have aches and pains, nasal
							congestion, runny nose, sore throat or diarrhea.
							These symptoms are usually mild & begin gradually.
							Some people become infected but don’t develop any
							symptoms & don't feel unwell. Most people (about
							80%) recover from the disease without needing
							special treatment.
						</Typography>
					</Grid>
					<Grid item sm={4} xs={12}>
						<img src={DetailImg} alt="" className={styles.img} />
						<Typography
							variant="h3"
							className={`${styles.title} ${styles.mt30} ${styles.primary}`}
						>
							Symptoms and what to do
						</Typography>
						<Typography
							component="p"
							variant="body2"
							className={styles.paragraph}
						>
							Self-isolation at home has been recommended for
							those diagnosed with COVID-19 and those who suspect
							they have been infected.Public health agencies have
							issued self-isolation instructions that include
							notification of healthcare providers by phone and
							restricting all activities outside of the home,
							except for getting medical care.
							<Link
								href="/"
								className={`${styles.link} ${styles.primary}`}
							>
								Read more
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</section>
			<section className={`${styles.container} ${styles.mt30}`}>
				<Typography
					variant="h3"
					className={`${styles.title} ${styles.mt30}`}
				>
					Preventions
				</Typography>
				<Grid container spacing={4}>
					{preventions.map((item, index) => (
						<Grid item sm={4} xs={12} key={index}>
							<PreventionCard
								title={item.title}
								imgSrc={item.imgSrc}
								content={item.content}
							/>
						</Grid>
					))}
				</Grid>
			</section>
		</>
	);
}

export default Wiki;
