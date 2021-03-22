import React from "react";
import { SiteIcon } from "./siteIcon/SiteIcon";
import { UserIcon } from "./userIcon/UserIcon";
import { Navbar } from "./navbar/Navbar";
import { Search } from "./search/Search";
import "./header.css";

export const Header = () => {
	return (
		<div className="header--container">
			<div className="header--leftContainer">
				<SiteIcon />
				<Search />
			</div>
			<div className="header--centerContainer">
				<h1>Video Service</h1>
			</div>
			<div className="header--rightContainer">
				<Navbar />
				<UserIcon />
			</div>
		</div>
	);
};
