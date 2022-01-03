import React from "react";

export default function Group() {
	return (
		<div
			className="w-screen h-screen p-4 bg-gray-500 grid gap-4"
			style={{
				gridTemplateColumns: "repeat(3, 1fr) 320px",
			}}
		>
			<div className="col-span-3 bg-gray-700 rounded-xl overflow-hidden relative">
				<div className="w-full h-full bg-gray-600"></div>
				<div className="w-[calc(100%-4rem)] h-20 rounded-xl bg-gray-800 bg-opacity-50 backdrop-blur-xl sticky bottom-8 left-[2rem]"></div>
			</div>
			<div className=" bg-gray-700 rounded-xl overflow-hidden relative">
				<div className="w-full h-12 absolute top-0 z-50">
					<div className="w-full h-12 bg-gray-800 bg-opacity-50 backdrop-blur-xl flex place-items-center p-4 text-white">
						<p className="flex-grow text-xs">ក្រុមទី ១</p>
						<div className="text-xs">បិទ</div>
					</div>
				</div>
				<GroupList />
				<GroupControl />
			</div>
		</div>
	);
}

function GroupMember() {
	return (
		<div className="flex items-center space-x-4 p-4  rounded-xl hover:bg-gray-600">
			<div className="aspect-square w-10 rounded-full bg-gray-300"></div>
			<div className="text-white flex-grow">
				<p className="font-bold">ឈ្មោះសិស្ស</p>
				<p className="text-xs">កំពុងស្តាប់</p>
			</div>
			<div>🎤</div>
		</div>
	);
}

function GroupList() {
	return (
		<div className="w-full h-full px-4 pt-16 pb-44 grid items-start content-start overflow-y-auto absolute top-0">
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
			<GroupMember />
		</div>
	);
}

function GroupControl() {
	return (
		<div className="w-full h-[150px] absolute bottom-0">
			<div className="w-full h-full relative overflow-hidden">
				<div className="w-full h-[150px] grid grid-cols-3 gap-4 p-4 place-content-center absolute top-0 z-50">
					<div>
						<div className="aspect-square rounded-full bg-green-700 transition-all scale-75 hover:scale-90"></div>
					</div>
					<div>
						<div className="aspect-square rounded-full bg-blue-700 transition-all scale-100 hover:scale-125"></div>
					</div>
					<div>
						<div className="aspect-square rounded-full bg-red-700 transition-all scale-75 hover:scale-90"></div>
					</div>
				</div>
				<div className="w-full h-[150px] bg-gray-800 bg-opacity-50 backdrop-blur-xl"></div>
			</div>
		</div>
	);
}
