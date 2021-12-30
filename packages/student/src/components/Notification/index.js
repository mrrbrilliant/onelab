import React from "react";

export default function Notification() {
	return (
		<div className="absolute top-0 right-0 p-4 flex flex-col justify-center"></div>
	);
}

const NormalNotification = () => (
	<div
		className="bg-white shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block"
		id="static-example"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
		data-mdb-autohide="false"
	>
		<div className=" bg-white flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
			<p className="font-bold text-gray-500">MDBootstrap</p>
			<div className="flex items-center">
				<p className="text-gray-600 text-xs">11 mins ago</p>
				<button
					type="button"
					className=" btn-close box-content w-4 h-4 ml-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
					data-mdb-dismiss="toast"
					aria-label="Close"
				>
					X
				</button>
			</div>
		</div>
		<div className="p-3 bg-white rounded-b-lg break-words text-gray-700">
			Static Example
		</div>
	</div>
);

const ErrorNotification = () => (
	<div
		className="bg-red-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
		id="static-example"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
		data-mdb-autohide="false"
	>
		<div className="bg-red-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-red-500 rounded-t-lg">
			<p className="font-bold text-white flex items-center">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="times-circle"
					className="svg-inline--fa fa-times-circle w-4 h-4 mr-2 fill-current"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path
						fill="currentColor"
						d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
					></path>
				</svg>
				MDBootstrap
			</p>
			<div className="flex items-center">
				<p className="text-white opacity-90 text-xs">11 mins ago</p>
				<button
					type="button"
					className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
					data-mdb-dismiss="toast"
					aria-label="Close"
				>
					X
				</button>
			</div>
		</div>
		<div className="p-3 bg-red-600 rounded-b-lg break-words text-white">
			Hello, world! This is a toast message.
		</div>
	</div>
);

const WarningNotification = () => (
	<div
		className="bg-yellow-500 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
		id="static-example"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
		data-mdb-autohide="false"
	>
		<div className="bg-yellow-500 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-yellow-400 rounded-t-lg">
			<p className="font-bold text-white flex items-center">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="exclamation-triangle"
					className="svg-inline--fa fa-exclamation-triangle w-4 h-4 mr-2 fill-current"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 576 512"
				>
					<path
						fill="currentColor"
						d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
					></path>
				</svg>
				MDBootstrap
			</p>
			<div className="flex items-center">
				<p className="text-white opacity-90 text-xs">11 mins ago</p>
				<button
					type="button"
					className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
					data-mdb-dismiss="toast"
					aria-label="Close"
				>
					X
				</button>
			</div>
		</div>
		<div className="p-3 bg-yellow-500 rounded-b-lg break-words text-white">
			Hello, world! This is a toast message.
		</div>
	</div>
);

const SuccessNotification = () => (
	<div
		className="bg-green-500 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
		id="static-example"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
		data-mdb-autohide="false"
	>
		<div className="bg-green-500 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-green-400 rounded-t-lg">
			<p className="font-bold text-white flex items-center">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="check-circle"
					className="svg-inline--fa fa-check-circle w-4 h-4 mr-2 fill-current"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path
						fill="currentColor"
						d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
					></path>
				</svg>
				MDBootstrap
			</p>
			<div className="flex items-center">
				<p className="text-white opacity-90 text-xs">11 mins ago</p>
				<button
					type="button"
					className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
					data-mdb-dismiss="toast"
					aria-label="Close"
				>
					X
				</button>
			</div>
		</div>
		<div className="p-3 bg-green-500 rounded-b-lg break-words text-white">
			Hello, world! This is a toast message.
		</div>
	</div>
);

const InfoNotification = () => (
	<div
		className="bg-blue-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
		id="static-example"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
		data-mdb-autohide="false"
	>
		<div className="bg-blue-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-blue-500 rounded-t-lg">
			<p className="font-bold text-white flex items-center">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="info-circle"
					className="svg-inline--fa fa-info-circle w-4 h-4 mr-2 fill-current"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path
						fill="currentColor"
						d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
					></path>
				</svg>
				MDBootstrap
			</p>
			<div className="flex items-center">
				<p className="text-white opacity-90 text-xs">11 mins ago</p>
				<button
					type="button"
					className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
					data-mdb-dismiss="toast"
					aria-label="Close"
				>
					X
				</button>
			</div>
		</div>
		<div className="p-3 bg-blue-600 rounded-b-lg break-words text-white">
			Hello, world! This is a toast message.
		</div>
	</div>
);
