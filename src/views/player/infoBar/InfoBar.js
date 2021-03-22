import React from "react";
import { ThumbsUpSVG } from "assets/SVG/ThumbsUpSVG";
import { ThumbsDownSVG } from "assets/SVG/ThumbsDownSVG";
import { numbersFormater } from "tools/numbersFormater";
import "./infoBar.css";

export const InfoBar = ({ data }) => {
	return (
		<div className="infoBar--container">
			<span>{numbersFormater(data.viewCount)} views</span>
			<div className="infoBar--likes">
				<div className="infoBar--likes-counter">
					<span>{numbersFormater(data.likeCount)}</span>
					<ThumbsUpSVG />
				</div>
				<div className="infoBar--likes-counter">
					<span>{numbersFormater(data.dislikeCount)}</span>
					<ThumbsDownSVG />
				</div>
			</div>
		</div>
	);
};
