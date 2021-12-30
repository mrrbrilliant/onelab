import React, { useContext, useEffect, useState } from "react";
import jrpc from "jsonrpc-lite";
import { v4 as uuid } from "uuid";
import { SocketContext } from "../../store/SocketContext";

export default function User() {
  const [socket, setSocket] = useContext(SocketContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let rpc_data = jrpc.request(uuid(), "get_users", {});
    socket.emit("request", rpc_data);
  }, [socket]);

  useEffect(() => {
    socket.on("get_users", (data) => {
      let u = data.result;
      setUsers([...u]);
    });
  }, [socket, users]);

  return (
    <div className="flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-4">ចុះឈ្មោះថ្មី</h2>
      <div>
        <form>
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="អ៊ីម៉ែល"
            />
            <input
              type="text"
              name="user_id"
              className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="លេខសម្ងាត់"
            />
            <input
              type="text"
              name="parent_workspace_id"
              className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="បញ្ជាក់លេខសម្ងាត់"
            />
            <input
              type="submit"
              name="submit"
              value="បង្កើត"
              className="bg-green-500 w-32 rounded-md"
            />
          </div>
        </form>
      </div>
      <br />
      <h2 className="text-2xl font-bold mb-4">អ្នកប្រើប្រាស់ទាំងអស់</h2>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    អ៊ីម៉ែល
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    លេខគណនី
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((s, i) => {
                    return (
                      <tr key={s._id} className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {i + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {s.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {s._id}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
