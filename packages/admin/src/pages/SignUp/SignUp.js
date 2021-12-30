import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jrpc from "jsonrpc-lite";
import { v4 as uuid } from "uuid";
import { SocketContext } from "../../store/SocketContext";

const initialState = { email: "", password: "" };

export default function SignUp() {
  const navigate = useNavigate();
  const [socket, setSocket] = useContext(SocketContext);
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let rpc_data = jrpc.request(uuid(), "sign_up", { ...data });
    socket.emit("request", rpc_data);
    setTimeout(() => {
      setData(initialState);
      navigate("/sign_in");
    }, 10000);
  };

  return (
    <div className="w-screen h-screen grid content-center place-items-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="អ៊ីម៉ែល"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="លេខសម្ងាត់"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-check text-center mb-6">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck25"
            >
              តាមដានព័ត៌មានថ្មីៗរបស់យើង
            </label>
          </div>
          <button
            type="submit"
            className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            ចុះឈ្មោះ
          </button>
        </form>
      </div>
    </div>
  );
}
