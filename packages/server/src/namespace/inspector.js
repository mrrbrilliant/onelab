const log = require("node-pretty-log");

const inspectorHandler = (ns) => {
    ns.on("connection", socket => {
        log("info", "CONNECTION:", `/inspector/${socket.id}`)
    })
}

module.exports = inspectorHandler;