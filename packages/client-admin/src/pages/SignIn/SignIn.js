import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import jrpc from "jsonrpc-lite";

import { SocketContext } from "../../store/context/SocketContext";
import { AuthContext, DefaultAuth } from "../../store/AuthContext";

const initialState = { email: "", password: "" };

export default function SignIn() {
	const { authentication, setAuthentication } = useContext(AuthContext);
	const socket = useContext(SocketContext);
	const navigate = useNavigate();
	const [data, setData] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let rpc_data = jrpc.request(uuid(), "sign_in", { ...data });
		socket.emit("request", rpc_data);
	};

	useEffect(() => {
		if (authentication.auth) {
			navigate("/");
		}
	}, [authentication, navigate]);

	useEffect(() => {
		if (socket) {
			socket.on("sign_in", (res) => {
				let { token } = res.result;

				window.localStorage.setItem("AUTH_TOKEN", token);

				setTimeout(() => {
					setAuthentication(DefaultAuth());
					navigate("/");
				}, 250);
			});
		}
	}, [socket, setAuthentication, navigate]);

	return (
		<div className="w-screen h-screen grid content-center place-items-center">
			<div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
				<form onSubmit={handleSubmit}>
					<div className="form-group mb-6">
						<label
							htmlFor="exampleInputEmail2"
							className="form-label inline-block mb-2 text-gray-700"
						>
							អ៊ីម៉ែល
						</label>
						<input
							type="email"
							className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							aria-describedby="emailHelp"
							placeholder="studentName@school.com"
							name="email"
							value={data.email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group mb-6">
						<label
							htmlFor="exampleInputPassword2"
							className="form-label inline-block mb-2 text-gray-700"
						>
							លេខសម្ងាត់
						</label>
						<input
							type="password"
							className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInputPassword2"
							placeholder="********"
							name="password"
							value={data.password}
							onChange={handleChange}
						/>
					</div>
					<div className="flex justify-between items-center mb-6">
						<div className="form-group form-check">
							<input
								type="checkbox"
								className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
								id="exampleCheck2"
							/>
							<label
								className="form-check-label inline-block text-gray-800"
								htmlFor="exampleCheck2"
							>
								ចំណាំខ្ញុំ
							</label>
						</div>{" "}
						<Link
							to="/reset_password"
							className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
						>
							ភ្លេចលេខសម្ងាត់?
						</Link>
					</div>
					<button
						type="submit"
						className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						ចូលគណនី
					</button>
					<p className="text-gray-800 mt-6 text-center">
						មិនទាន់ជាសមាជិក?{" "}
						<Link
							to="/sign_up"
							className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
						>
							ចុះឈ្មោះ
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
