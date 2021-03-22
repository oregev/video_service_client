import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveVideo } from "views/favorites/favoritesSlice";
import { removeVideo } from "views/favorites/favoritesSlice";
import { Duration } from "./duration/Duration";
import { AddSVG } from "assets/SVG/AddSVG";
import { GarbageSVG } from "assets/SVG/GarbageSVG";
import { numbersFormater } from "tools/numbersFormater";
import "./video.css";

export const Video = ({ video }) => {
	const dispatch = useDispatch();

	const saveToFavorits = async () => {
		video.isFavorite = true;
		dispatch(saveVideo(video));
	};

	const removeFromFavorites = async () => {
		video.isFavorite = false;
		dispatch(removeVideo(video.id));
	};

	return (
		<div className="video--container">
			<Duration duration={video.duration} />
			<Link className="video--linkContainer" to={`/player${video.id}`} style={{ textDecoration: "none" }}>
				<img className="video--image" src={video.thumbnailUrl} alt={video.title} />
				<h3 className="video--title">{video.title}</h3>
			</Link>
			<footer>
				<div>
					{!video.isFavorite ? (
						<div className="video--addContainer">
							<button onClick={saveToFavorits} title="Add to favorites">
								<AddSVG />
							</button>
						</div>
					) : (
						<div className="video--removeContainer">
							<button onClick={removeFromFavorites} title="Remove from favorites">
								<GarbageSVG />
							</button>
						</div>
					)}
				</div>
				<span title="View count">{numbersFormater(video.viewCount)}</span>
			</footer>
		</div>
	);
};
