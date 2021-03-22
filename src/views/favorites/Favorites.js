import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesData } from "./favoritesSlice";
import { Video } from "components/video/Video";
import { Spinner } from "components/spinner/Spinner";
import "./favorites.css";

export const Favorites = () => {
	const dispatch = useDispatch();
	const { favorites } = useSelector((state) => state.favorites);

	useEffect(() => {
		dispatch(getFavoritesData());
	}, [dispatch]);

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	});

	return (
		<div className="view favorites--container">
			<header>
				<span>FAVORITES</span>
			</header>
			{favorites ? (
				<div className="trends--container">
					{favorites.videos.map((video, i) => (
						<Video key={i.toString()} video={video} />
					))}
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};
