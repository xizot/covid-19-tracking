import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { CountrySelector, HighLight, Summary } from "..";
import moment from "moment";
import { getCountry, getReportByCountry } from "../../apis";
import { sortBy } from "lodash";

function Dashboard() {
	const [countries, setCountries] = useState([]);
	const [report, setReport] = useState([]);
	const [selectedCountryId, setSelectedCountryId] = useState("");
	useEffect(() => {
		let unmounted = false;

		getCountry().then((res) => {
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
			<Typography component="h2" variant="h2">
				Covid-19 tracker
			</Typography>
			<Typography>{moment().format("LLL")}</Typography>

			<CountrySelector
				countries={countries}
				handleOnChange={handleOnChange}
				value={selectedCountryId}
			/>
			<HighLight report={report} />
			<Summary report={report} selectedCountryId={selectedCountryId} />
		</>
	);
}

export default Dashboard;
