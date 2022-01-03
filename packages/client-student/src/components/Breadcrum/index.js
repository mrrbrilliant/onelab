import React from "react";
import { Link } from "react-router-dom";
export default function Breadcrum() {
	return (
		<nav className="sticky top-0 bg-gray-100 px-5 py-3 rounded-md">
			<ol className="list-reset flex">
				<li>
					<Link to="#" className="text-blue-600 hover:text-blue-700">
						Home
					</Link>
				</li>
				<li>
					<span className="text-gray-500 mx-2">/</span>
				</li>
				<li>
					<Link to="#" className="text-blue-600 hover:text-blue-700">
						Library
					</Link>
				</li>
				<li>
					<span className="text-gray-500 mx-2">/</span>
				</li>
				<li className="text-gray-500">Data</li>
			</ol>
		</nav>
	);
}
