import React from "react";

export default function SignUp() {
	return (
		<div className="w-screen h-screen grid content-center place-items-center">
			<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
				<form>
					<div className="grid grid-cols-2 gap-4">
						<div className="form-group mb-6">
							<input
								type="text"
								className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleInput123"
								aria-describedby="emailHelp123"
								placeholder="នាម"
							/>
						</div>
						<div className="form-group mb-6">
							<input
								type="text"
								className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleInput124"
								aria-describedby="emailHelp124"
								placeholder="គោត្តនាម"
							/>
						</div>
					</div>
					<div className="form-group mb-6">
						<input
							type="email"
							className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInput125"
							placeholder="អ៊ីម៉ែល"
						/>
					</div>
					<div className="form-group mb-6">
						<input
							type="password"
							className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInput126"
							placeholder="លេខសម្ងាត់"
						/>
					</div>
					<div className="form-group form-check text-center mb-6">
						<input
							type="checkbox"
							className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
							id="exampleCheck25"
						/>
						<label
							className="form-check-label inline-block text-gray-800"
							for="exampleCheck25"
						>
							តាមដានព័ត៌មានថ្មីៗរបស់យើង
						</label>
					</div>
					<button
						type="submit"
						className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						ចុះឈ្មោះ
					</button>
				</form>
			</div>
		</div>
	);
}