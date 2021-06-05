import { AppBar, Container, Tab, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Dashboard, Wiki, News } from "..";

function Home({ match, history }) {
	const { params } = match;
	const { page } = params;
	const [selectedTab, setSelectedTab] = useState(0);

	const indexToTabName = {
		0: "dashboard",
		1: "wiki",
		2: "news",
	};
	const handleChange = (event, newValue) => {
		history.push(`/${indexToTabName[newValue]}`);
		setSelectedTab(newValue);
	};
	useEffect(() => {
		const tabNameToIndex = {
			dashboard: 0,
			wiki: 1,
			news: 2,
		};
		setSelectedTab(tabNameToIndex[page]);
	}, [page]);

	return (
		<>
			<AppBar position="static">
				<Container>
					<Tabs value={selectedTab} onChange={handleChange}>
						<Tab label="Dash board" />
						<Tab label="Wiki" />
						<Tab label="News" />
					</Tabs>
				</Container>
			</AppBar>
			<div style={{ padding: "50px 0", background: "#f1f5f8" }}>
				<Container>
					{selectedTab === 0 && <Dashboard />}
					{selectedTab === 1 && <Wiki />}
					{selectedTab === 2 && <News />}
				</Container>
			</div>
		</>
	);
}

export default Home;
