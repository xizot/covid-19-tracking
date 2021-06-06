import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { CountrySelector, HighLight, LineChart, Loading } from "..";
import moment from "moment";
import { getCountry, getReportByCountry } from "../../apis";
import { sortBy } from "lodash";

function Dashboard() {
	const [countries, setCountries] = useState([]);
	const [report, setReport] = useState([]);
	const [selectedCountryId, setSelectedCountryId] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		let unmounted = false;
		setIsLoading(true);
		getCountry().then((res) => {
			setIsLoading(false);
			const countries = sortBy(res.data, "Country");
			if (!unmounted) {
				setCountries(countries);
				setSelectedCountryId("vn");
			}
		});
		return () => {
			unmounted = true;
		};
	}, []);

	const handleOnChange = React.useCallback((e) => {
		setSelectedCountryId(e.target.value);
	}, []);

	useEffect(() => {
		if (selectedCountryId) {
			const { Slug } = countries.find(
				(country) => country.ISO2.toLowerCase() === selectedCountryId
			);
			getReportByCountry(Slug).then((res) => {
				res.data.pop();
				setReport(res.data);
			});
		}
	}, [countries, selectedCountryId]);

	return (
		<>
			{isLoading && <Loading />}
			<Typography component="h2" variant="h2">
				Covid-19 tracker
			</Typography>
			<Typography>{moment().format("LLL")}</Typography>
			<Grid container spacing={4}>
				<Grid item sm={4} xs={12}>
					<CountrySelector
						countries={countries}
						handleOnChange={handleOnChange}
						value={selectedCountryId}
					/>
					<HighLight report={report} />
				</Grid>
				<Grid item sm={8} xs={12}>
					<LineChart data={report} />
				</Grid>
			</Grid>
		</>
	);
}

export default Dashboard;
