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
  const token = socket.request.headers["authorization"] || null;
  const data = jrpc.parseObject(rpc_data);

  const type = data["type"] || null;
  const id = data["payload"]["id"] || uuid();
  const method = data["payload"]["method"] || null;
  const params = data["payload"]["params"] || null;

  if (type === "invalid") {
    let ID = socket.id;
    let error = Status.Error({ id, ErrMsg: `Malformed JSONRPC`, ErrCode: 999 });
    ns.to(ID).emit("RPC_ERROR", error);
    return;
  }

  if (type === "request") {
    let socket_id = socket.id;

    if (method === "sign_up") {
      const email = params["email"] || null;
      const password = params["password"] || null;

      if (email && password) {
        try {
          let sign_up = await User.signUp({ ...params });
          if (sign_up.email) {
            ns.to(socket_id).emit(
              "notification",
              jrpc.success(id, "User created")
            );
            ns.to(socket_id).emit("response", jrpc.success(id, "User created"));
            return;
          }
        } catch (e) {
          if (e) {
            if (e.code && e.code === 11000) {
              message = "អ៊ីម៉ែលនេះ ធ្លាប់បានចុះឈ្មោះ រួចហើយ";
            } else {
              message = "An error occured. Sign up faild";
            }
          }

          let error = Status.Error({ id, ErrMsg: message, ErrCode: 999 });
          ns.to(socket_id).emit("notification", error);
          return;
        }
      } else {
        let error = Status.Error({
          id,
          ErrMsg: `email and password are required`,
          ErrCode: 999,
        });
        ns.to(socket_id).emit("notification", error);
        return;
      }
    }

    if (method === "sign_in") {
      const email = params["email"] || null;
      const password = params["password"] || null;

      if (email && password) {
        try {
          let token = await User.signIn({ ...params }).catch((e) => {
            throw e;
          });

          if (token) {
            ns.to(socket_id).emit(
              "notification",
              jrpc.success(id, "Signed in successfully")
            );
            ns.to(socket_id).emit("sign_in", jrpc.success(id, { token }));
            return;
          }
        } catch (e) {
          let error = Status.Error({ id, ErrMsg: e, ErrCode: 999 });
          ns.to(socket_id).emit("notification", error);
          return;
        }
      } else {
        let error = Status.Error({
          id,
          ErrMsg: `email and password are required`,
          ErrCode: 999,
        });
        ns.to(socket_id).emit("notification", error);
        return;
      }
    }

    if (method === "create_school") {
      const { name, user_id, parent_workspace_id } = params;

      if (name && user_id && parent_workspace_id) {
        try {
          let school = await School.createWorkspace({
            name,
            user_id,
            parent_workspace_id,
          });

          if (school.name) {
            ns.to(socket_id).emit(
              "notification",
              jrpc.success(id, "School created")
            );
            ns.to(socket_id).emit("create_school", jrpc.success(id, school));
            return;
          }
        } catch (e) {
          if (e) {
            if (e.code && e.code === 11000) {
              message = "សាលានេះ ធ្លាប់បានចុះឈ្មោះ រួចហើយ";
            } else {
              message = "An error occured. Sign up faild";
            }
          }
        }
      } else {
        let error = Status.Error({
          id,
          ErrMsg: `name and user_id are required`,
          ErrCode: 999,
        });
        ns.to(socket_id).emit("notification", error);
        return;
      }
    }

    if (method === "get_schools") {
      let schools = await School.getMyWorkspaces();
      ns.to(socket_id).emit("get_schools", jrpc.success(id, schools));
      return;
    }

    if (method === "get_users") {
      let users = await User.getAllUsers();
      ns.to(socket_id).emit("get_users", jrpc.success(id, users));
      return;
    }

    if (method === "get_classes") {
      let classes = await CLASS.find();
      ns.to(socket_id).emit("get_classes", jrpc.success(id, classes));
      return;
    }

    if (method === "create_class") {
      const { name, school_id, members } = params;
      if (name && school_id) {
        let new_class = await new CLASS({ name, school_id, members }).save();
        ns.to(socket_id).emit("create_class", jrpc.success(id, new_class));
        return;
      }
    }

    let error = Status.Error({
      id,
      ErrMsg: `[${method}] ជាមុខងាមិនត្រឹមត្រូវ`,
      ErrCode: 999,
    });
    ns.to(socket_id).emit("notification", error);
  }
};

module.exports = adminHandler;
