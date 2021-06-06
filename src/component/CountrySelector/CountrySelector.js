import {
	FormControl,
	FormHelperText,
	InputLabel,
	makeStyles,
	NativeSelect,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
	formControl: {
		margin: "20px 0",
		width: "100%",
	},
});

function CountrySelector({ countries, value, handleOnChange }) {
	const styles = useStyles();
	return (
		<FormControl className={styles.formControl}>
			<InputLabel htmlFor="country-selector" shrink>
				Country
			</InputLabel>
			<NativeSelect
				value={value}
				onChange={handleOnChange}
				inputProps={{
					name: "country",
					id: "country-selector",
				}}
			>
				{countries.map((country, index) => (
					<option key={index} value={country.ISO2.toLowerCase()}>
						{country.Country}
					</option>
				))}
			</NativeSelect>
			<FormHelperText>Country selection</FormHelperText>
		</FormControl>
	);
}

export default CountrySelector;
