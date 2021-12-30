const log = require("node-pretty-log");

const teacherHandler = (ns_t, ns_s) => {
    ns_t.on("connection", socket => {

        log("info", "CONNECTION:", `/teacher/${socket.id}`)

        socket.on("new_state", (data) => {
            log("info", "new_state", data)
            ns_s.emit("new_state", data);
        })
        
        socket.on("disconnect", () => log("error", "disconnected", `/teacher/${socket.id}`))
    })
}

module.exports = teacherHandler;