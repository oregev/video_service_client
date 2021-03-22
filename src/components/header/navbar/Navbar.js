import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar--container">
			<NavLink className="navbar--link" activeClassName="navbar--link-active" to="/trends" title="Check whats Hot!">
				HOT
			</NavLink>
			<NavLink
				className="navbar--link"
				activeClassName="navbar--link-active"
				to="/favorites"
				title="Check your favorites"
			>
				FAVORITES
			</NavLink>
		</nav>
	);
};
