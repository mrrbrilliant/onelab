const log = require("node-pretty-log");
const uuid = require("uuid").v4;

// Local
const jrpc = require("jsonrpc-lite");
const Status = require("../rpc/status");
const { User, School } = require("../rpc");
const { CLASS } = require("../models");

const adminHandler = (ns) => {
	ns.on("connection", (socket) => {
		log("info", "CONNECTION:", `/admin/${socket.id}`);

		socket.on(
			"request",
			async (rpc_data) => await rpcHandler(ns, socket, rpc_data)
		);

		socket.on("disconnect", () => {
			log("info", "DISCONNECT:", `/admin/${socket.id}`);
		});
	});
};

const rpcHandler = async (ns, socket, rpc_data) => {
	try {
		const token = socket.request.headers["authorization"] || null;
		const data = jrpc.parseObject(rpc_data);

		const type = data["type"] || null;
		const id = data["payload"]["id"] || uuid();
		const method = data["payload"]["method"] || null;
		const params = data["payload"]["params"] || null;

		if (type === "invalid") {
			let ID = socket.id;
			let error = Status.Error({
				id,
				ErrMsg: `Malformed JSONRPC`,
				ErrCode: 999,
			});
			ns.to(ID).emit("RPC_ERROR", error);
			return;
		}

		if (type === "request") {
			let socket_id = socket.id;

			if (method === "get_school") {
				let schools = await School.getMyWorkspaces();
				ns.to(socket_id).emit("get_school", jrpc.success(id, schools));
				return;
			}

			if (method === "get_classes") {
				let classes = await CLASS.find();
				ns.to(socket_id).emit("get_classes", jrpc.success(id, classes));
				return;
			}

			if (method === "create_class") {
				const { name, school_id } = params;
				if (name && school_id) {
					let new_class = await new CLASS({ name, school_id }).save();
					ns.to(socket_id).emit("create_class", jrpc.success(id, new_class));
					return;
				}
			}

			if (method === "update_class") {
				const { id, update } = params;
				if (id) {
					let updated_class = await CLASS.findOneAndUpdate(
						{ _id: id },
						{ ...update }
					);
					ns.to(socket_id).emit(
						"create_class",
						jrpc.success(id, updated_class)
					);
					return;
				}
			}

			if (method === "remove_class") {
				const { id } = params;
				if (id) {
					let removed = await CLASS.findByIdAndDelete(id);
					ns.to(socket_id).emit("class_removed", jrpc.success(id, removed));
					return;
				}
			}

			if (method === "add_member") {
				const { user_id, school_id, role_id, created_at, expire } = params;
			}

			if (method === "update_member") {
				const { id, user_id, school_id, role_id, created_at, expire } = params;
			}

			if (method === "remove_member") {
				const { id } = params;
				if (id) {
					let removed = await MEMBER.findByIdAndDelete(id);
					ns.to(socket_id).emit("class_removed", jrpc.success(id, removed));
					return;
				}
			}
			let error = Status.Error({
				id,
				ErrMsg: `[${method}] ជាមុខងាមិនត្រឹមត្រូវ`,
				ErrCode: 999,
			});
			throw error;
		}
	} catch (error) {
		ns.to(socket_id).emit("notification", error);
	}
};

module.exports = adminHandler;
