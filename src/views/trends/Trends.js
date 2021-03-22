import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendsData, getNextTrends } from "./trendsSlice";
import { getFavoritesData } from "views/favorites/favoritesSlice";
import { Video } from "components/video/Video";
import { Spinner } from "components/spinner/Spinner";
import "./trends.css";

export const Trends = () => {
	const dispatch = useDispatch();
	const { trends } = useSelector((state) => state.trends);
	const { favorites } = useSelector((state) => state.favorites);

	const getMoreVideos = () => dispatch(getNextTrends(trends.token));

	useEffect(() => {
		if (!favorites)
			dispatch(getFavoritesData()).then(() => {
				if (!trends) dispatch(getTrendsData());
			});
	}, [dispatch, trends, favorites]);

	return (
		<div className="view">
			<header>
				<span>TRENDING</span>
			</header>
			{trends ? (
				<div className="trends--container" style={{ overflowY: "scroll" }}>
					{trends.videos.map((video, i) => (
						<Video key={i.toString()} video={video} />
					))}
				</div>
			) : (
				<Spinner />
			)}
			<footer className="trends--getMore">
				<button onClick={getMoreVideos}>GET MORE VIDEOS</button>
			</footer>
		</div>
	);
};
