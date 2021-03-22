import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { store } from "redux/store";
import { Provider } from "react-redux";
import { Header } from "components/header/Header";
import { Trends } from "./trends/Trends";
import { Favorites } from "./favorites/Favorites";
import { Player } from "./player/Player";

import "./videoService.css";

export const VideoService = () => {
	return (
		<div className="videoService--container">
			<Provider store={store}>
				<Router>
					<Redirect from="/" to="trends" />
					<Header />
					<Switch>
						<Route exact path="/trends">
							<Trends />
						</Route>
						<Route exact path="/favorites">
							<Favorites />
						</Route>
						<Route exact path="/player:id">
							<Player />
						</Route>
					</Switch>
				</Router>
			</Provider>
		</div>
	);
};
