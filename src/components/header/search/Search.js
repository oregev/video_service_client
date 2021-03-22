import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchVideos } from "./searchSlice";
import { SearchSVG } from "assets/SVG/SearchSVG";
import "./search.css";

export const Search = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const searchVideo = async (e) => {
		e.preventDefault();
		const serachParem = e.target[0].value;
		await dispatch(searchVideos(serachParem));
		history.push("/trends");
	};

	return (
		<form className="search--container" onSubmit={(e) => searchVideo(e)}>
			<input id="input" type="text" placeholder="Search"></input>
			<button title="Search a movie">
				<SearchSVG />
			</button>
		</form>
	);
};
