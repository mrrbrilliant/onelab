import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "../NavBar";
import Breadcrum from "../Breadcrum";

export default function Layout() {
	return (
		<div className="w-[100vw] min-h-screen flex flex-row">
			<div className="w-[15vw]">
				<NavBar />
			</div>
			<div className="w-[85vw]">
				<Outlet />
			</div>
		</div>
	);
}
