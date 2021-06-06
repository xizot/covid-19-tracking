import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { getNews } from "../../apis";
import NewsCard from "./NewsCard";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Loading from "../Loading/Loading";
const useStyles = makeStyles({
	news: {
		marginBottom: 50,
	},
	pagination: {
		display: "flex",
		justifyContent: "center",
	},
});
function News() {
	const styles = useStyles();
	const [page, setPage] = useState(0);
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const limit = 8;
	const handleChange = React.useCallback((e, newValue) => {
		setPage(newValue - 1);
	}, []);

	useEffect(() => {
		setIsLoading(true);
		getNews(limit, page).then((res) => {
			setData(res.data);
			setIsLoading(false);
		});
	}, [page]);

	return (
		<>
			{isLoading && <Loading />}
			<Grid container spacing={4} className={styles.news}>
				{data.data &&
					data.data.rows.map((item, index) => (
						<Grid item lg={3} md={4} sm={6} xs={12} key={index}>
							<NewsCard
								title={item.title}
								link={item.link}
								imgSrc={item.image}
								date={item.date}
								content={item.content}
							/>
						</Grid>
					))}
			</Grid>
			<Container fixed>
				<Pagination
					className={styles.pagination}
					count={data.totalPage || 0}
					variant="outlined"
					shape="rounded"
					color="primary"
					showFirstButton={true}
					showLastButton={true}
					onChange={(e, value) => handleChange(e, value)}
				/>
			</Container>
		</>
	);
}

export default News;
