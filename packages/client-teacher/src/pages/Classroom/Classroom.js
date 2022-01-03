import React, { useContext, useEffect, useState } from "react";
import jrpc from "jsonrpc-lite";
import { v4 as uuid } from "uuid";
import { SocketContext } from "../../store/context/SocketContext";

const initialState = { name: "", school_id: "", members: [] };

export default function Classroom() {
	const socket = useContext(SocketContext);
	const [classes, setClasses] = useState([]);
	const [classroom, setClassroom] = useState(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		let rpc_data = jrpc.request(uuid(), "create_class", { ...classroom });
		socket.emit("request", rpc_data);
	};

	const handleChange = (e) => {
		let { name, value } = e.target;
		setClassroom({ ...classroom, [name]: value });
	};

	useEffect(() => {
		let rpc_data = jrpc.request(uuid(), "get_classes", {});
		socket.emit("request", rpc_data);
	}, [socket]);

	useEffect(() => {
		socket.on("create_class", (data) => {
			let u = data.result;
			setClassroom(initialState);
			setClasses([...classes, u]);
		});
	}, [socket, classes]);

	useEffect(() => {
		socket.on("get_classes", (data) => {
			let u = data.result;
			setClasses([...u]);
		});
	}, [socket, classes]);

	return (
		<div className="flex flex-col p-4">
			<h2 className="text-2xl font-bold mb-4">បង្កើតថ្នាក់ថ្មី</h2>
			<div>
				<form onSubmit={handleSubmit}>
					<div className="flex space-x-4">
						<input
							type="text"
							name="name"
							className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="floatingInput"
							placeholder="ឈ្មោះថ្នាក់"
							value={classroom.name}
							onChange={handleChange}
						/>
						<input
							type="text"
							name="school_id"
							className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="floatingInput"
							placeholder="ឈ្មោះសាលា"
							value={classroom.school_id}
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
			<h2 className="text-2xl font-bold mb-4">ថ្នាក់រៀនទាំងអស់</h2>
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
										ថ្មាក់
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										សាលា
									</th>
								</tr>
							</thead>
							<tbody>
								{classes.length > 0 &&
									classes.map((s, i) => {
										return (
											<tr key={s._id} className="bg-white border-b">
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
													{i + 1}
												</td>
												<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
													{s.name}
												</td>
												<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
													{s.school_id}
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
