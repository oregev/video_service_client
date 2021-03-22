import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "./playerSlice";
import { useParams } from "react-router-dom";
import { InfoBar } from "./infoBar/InfoBar";
import "./player.css";
import { Spinner } from "components/spinner/Spinner";

export const Player = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const data = useSelector((state) => state.video);
	const { video, loading } = data;

	useEffect(() => dispatch(getVideo(id)), [dispatch, id]);

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	});

	return (
		<div className="view">
			<header>
				<span>PLAYER</span>
			</header>
			<div className="player--container">
				{!loading && video ? (
					<>
						<h3>{video.title}</h3>
						<video poster={video.thumbnailUrl} controls />
						<InfoBar data={video} />
					</>
				) : (
					<Spinner />
				)}
				<span className="player--note">
					NOTE: This is a mockup version for a video service without the actual video stream implementation !
				</span>
			</div>
		</div>
	);
};
