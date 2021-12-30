import React from "react";

export default function ActiveSession() {
	const GridItem = () => (
		<div className="cursor-pointer hover:shadow-lg hover:scale-105 transition-all">
			<img
				src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
				className="max-w-full h-auto rounded-lg"
				alt=""
			/>
		</div>
	);

	return (
		<div className="w-full p-0 m-0 grid grid-cols-3">
			<div className="col-span-2 grid grid-cols-4 gap-4 items-center place-items-center p-4">
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
				<GridItem />
			</div>
			<div className="p-4 pl-0">
				<div className="sticky top-4 w-full h-[calc(100vh-2rem)] rounded-md">
					<div className="w-full aspect-video bg-white rounded-md mb-4">
						<img
							src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
							className="max-w-full h-auto rounded-lg"
							alt=""
						/>
					</div>
					<div className="w-full grid grid-cols-4 items-stretch gap-4">
						<button className="h-12 rounded-lg bg-green-500"></button>
						<button className="h-12 rounded-lg bg-red-500"></button>
						<button className="h-12 rounded-lg bg-yellow-500"></button>
						<button className="h-12 rounded-lg bg-blue-500"></button>
					</div>
				</div>
			</div>
		</div>
	);
}
