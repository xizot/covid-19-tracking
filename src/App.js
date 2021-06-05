import "@fontsource/roboto";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./component";
function App() {
	return (
		<Switch>
			<Redirect exact from="/" to="/dashboard" />
			<Route
				exact
				path="/:page?"
				render={(props) => <Home {...props} />}
			/>
		</Switch>
	);
}

export default App;
