import React, { useEffect, useContext } from "react";
import { SocketContext } from "../../store/SocketContext";
import { Outlet, Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Breadcrum from "../Breadcrum";

export default function Layout() {
	const socket = useContext(SocketContext);
	const nav = useNavigate();


	useEffect(() => {
		socket.on("new_state", (data) => {
			nav(data)
		})
	})
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
