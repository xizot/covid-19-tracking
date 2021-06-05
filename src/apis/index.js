import axios from "axios";

export const getCountry = () =>
	axios.get("https://api.covid19api.com/countries");
export const getReportByCountry = (country) =>
	axios.get(`https://api.covid19api.com/dayone/country/${country}`);
export const getMapDataByCountryId = (country) =>
	import(
		`@highcharts/map-collection/countries/${country}/${country}-all.geo.json`
	);
