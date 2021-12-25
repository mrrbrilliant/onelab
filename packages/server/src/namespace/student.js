const log = require("node-pretty-log");

const studentHandler = (ns) => {
    ns.on("connection", socket => {
        log("info", "CONNECTION:", `/student/${socket.id}`)
    })
}

module.exports = studentHandler;