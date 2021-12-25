const log = require("node-pretty-log");
const { adminHandler, inspectorHandler, studentHandler, teacherHandler } = require("./namespace")

const socket = (io) => {
	// const ns_admin = io.of("/admin");
	// const ns_inspector = io.of("/inspector");
	const ns_student = io.of("/student");
	const ns_teacher = io.of("/teacher");

	// adminHandler(ns_admin);
	// inspectorHandler(ns_inspector);
	studentHandler(ns_student);
	teacherHandler(ns_teacher, ns_student);
	io.on("connection", socket => {
		log("info", "CONNECTION:", socket.id)

		socket.on("hello", (data) => hello(socket, data))

		socket.on("disconnect", () => disconnect(socket))
	});
}

const disconnect = (socket) => log("info", "DISCONNECT:", socket.id)
const hello = (socket, data) => {
	log("warn", socket.id, data);
	socket.emit("response", data)
}

module.exports = socket;
