const log = require("node-pretty-log");

const socket = (io) => {
	io.on("connection", (socket) => {
		log("info", `New Connection: ${socket.id}`);

		socket.on("message", (data) => {
			log("info", data);
		});
	});
};

module.exports = socket;
