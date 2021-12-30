const jrpc = require("jsonrpc-lite");

const Status = {
    Error: ({ id, ErrMsg, ErrCode }) => {
        return jrpc.error(id, new jrpc.JsonRpcError(ErrMsg, ErrCode))
    },
    Success: ({ id, Result }) => {
        return jrpc.success(id, Result)
    }
}

module.exports = Status;