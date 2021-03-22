import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTrendsData } from "views/trends/trendsSlice";
import { PlaySVG } from "assets/SVG/PlaySVG";
import "./siteIcon.css";

export const SiteIcon = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const resetTrends = () => {
		history.push("/trends");
		dispatch(getTrendsData());
	};

	return (
		<div className="siteIcon--container" onClick={resetTrends} title="HOME">
			<PlaySVG />
		</div>
	);
};
