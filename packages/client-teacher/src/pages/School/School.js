import React, { useState, useEffect, useContext } from "react";
import jrpc from "jsonrpc-lite";
import { v4 as uuid } from "uuid";
import { SocketContext } from "../../store/context/SocketContext";

const initialState = { name: "", user_id: "", parent_workspace_id: "" };
export default function School() {
	const socket = useContext(SocketContext);
	const [schools, setSchools] = useState([]);
	const [data, setData] = useState(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		let rpc_data = jrpc.request(uuid(), "create_school", { ...data });
		socket.emit("request", rpc_data);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	useEffect(() => {
		if (socket) {
			let rpc_data = jrpc.request(uuid(), "get_schools", {});
			socket.emit("request", rpc_data);
		}
	}, [socket]);

	useEffect(() => {
		socket.on("get_schools", (data) => {
			setSchools([...data.result]);
		});
	}, [socket, schools]);

	useEffect(() => {
		socket.on("create_school", (data) => {
			setSchools([...schools, { ...data.result }]);
		});
	}, [socket, schools]);

	return (
		<div className="flex flex-col p-4">
			<h2 className="text-2xl font-bold mb-4">បង្កើតសាលាថ្មី</h2>
			<div>
				<form onSubmit={handleSubmit}>
					<div className="flex space-x-4">
						<input
							type="text"
							name="name"
							className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="floatingInput"
							placeholder="ឈ្មោះសាលា"
							value={data.name}
							onChange={handleChange}
						/>
						<input
							type="text"
							name="user_id"
							className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="floatingInput"
							placeholder="នាយកសាលា"
							value={data.user_id}
							onChange={handleChange}
						/>
						<input
							type="text"
							name="parent_workspace_id"
							className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="floatingInput"
							placeholder="ម្ចាស់សាលា"
							value={data.parent_workspace_id}
							onChange={handleChange}
						/>
						<input
							type="submit"
							name="submit"
							value="បង្កើត"
							className="bg-green-500 w-32 rounded-md"
						/>
					</div>
				</form>
			</div>
			<br />
			<h2 className="text-2xl font-bold mb-4">សាលាទាំងអស់</h2>
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="min-w-full">
							<thead className="border-b">
								<tr>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										#
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										ឈ្មោះសាលា
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										នាយកសាលា
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										ម្ចាស់សាលា
									</th>
								</tr>
							</thead>
							<tbody>
								{schools.length > 0 &&
									schools.map((s, i) => {
										return (
											<tr key={s._id} className="bg-white border-b">
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
													{i + 1}
												</td>
												<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
													{s.name}
												</td>
												<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
													{s.user_id}
												</td>
												<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
													{s.parent_workspace_id}
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
