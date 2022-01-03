import React, { useContext, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Breadcrum from "../Breadcrum";
import { AuthContext } from "../../store/AuthContext";

export default function Layout() {
	const { authentication } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!authentication.auth) {
			navigate("/sign_in", { replace: true });
		}
	}, [authentication, navigate]);

	return (
		<div className="w-[100vw] min-h-screen flex flex-row">
			{/* <div className="w-[15vw]">
				<NavBar />
			</div>
			<div className="w-[85vw]">
			</div> */}
			<Outlet />
		</div>
	);
}
