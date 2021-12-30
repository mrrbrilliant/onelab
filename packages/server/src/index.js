const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { connect } = require("mongoose");
const { config } = require("dotenv");
const log = require("node-pretty-log");

// Local
const socket = require("./socket");

config({ path: "../../.env" });
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: ["*"] });

const {
	MONGO_ADDRESS,
	MONGO_PORT,
	EXPRESS_ADDRESS,
	EXPRESS_PORT,
	MONGO_INITDB_DATABASE,
	MONGO_USER,
	MONGO_PASSWORD,
} = process.env;

const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_ADDRESS}:${MONGO_PORT}/${MONGO_INITDB_DATABASE}`;

async function main() {
	try {
		await connect(MONGO_URI).then(() => {
			log("success", "DATABASE: Connected");

			server.listen(EXPRESS_PORT, EXPRESS_ADDRESS, () => {
				log("success", `SERVER: http://${EXPRESS_ADDRESS}:${EXPRESS_PORT}`);
			});
		});
	} catch (e) {
		log("error", e);
	}
}

socket(io);
main();
