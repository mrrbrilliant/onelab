import React, { useEffect, useState } from "react";

export default function Confirmation() {
	const [hidden, setHidden] = useState(false);
	const [coolDown, setCoolDown] = useState(30);

	const say_yes = () => {
		setCoolDown(0);
		setHidden(true);
	};
	const say_no = () => {
		setCoolDown(0);
		setHidden(true);
	};
	useEffect(() => {
		if (coolDown > 1) {
			setTimeout(() => {
				setCoolDown((coolDown) => coolDown - 1);
			}, 1000);
		} else {
			say_no();
		}
	}, [coolDown, setCoolDown]);
	return (
		<div
			className={`bg-gray-900 bg-opacity-70 fixed top-0 left-0 w-screen h-screen grid place-items-center ${
				hidden && "hidden"
			}`}
		>
			<div className="w-1/3 modal-dialog modal-dialog-centered relative pointer-events-none">
				<div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
					<div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
						<h5
							className="font-medium leading-normal text-gray-700"
							id="exampleModalScrollableLabel"
						>
							យកវត្តមាន
						</h5>
						<button
							type="button"
							className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body relative p-4 text-xl font-bold">
						<p>តើអ្នកកំពុងរៀនមែនទេ?</p>
					</div>
					<div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
						<button
							type="button"
							className="px-6 py-2.5 bg-red-600 text-white text-sm leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
							data-bs-dismiss="modal"
							onClick={say_no}
						>
							ទេ ({coolDown})
						</button>
						<button
							type="button"
							className="px-6 py-2.5 bg-green-600 text-white text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
							onClick={say_yes}
						>
							បាទ/ចាស
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
