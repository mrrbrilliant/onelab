const log = require("node-pretty-log");


const adminHandler = (ns) => {
    ns.on("connection", socket => {
        log("info", "CONNECTION:", `/admin/${socket.id}`)

        

        socket.on("disconnect", () => {
            log("info", "DISCONNECT:", `/admin/${socket.id}`)
        })
    })
}

const sign_up = ({ email, password }) => {}
const sign_in = ({ email, password }) => {}

module.exports = adminHandler;