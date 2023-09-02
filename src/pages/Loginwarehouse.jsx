import React, { useState } from "react";
import { signupWarehouse } from "../services/user-service";

const Loginwarehouse = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isAuthenticated = null;

    const data = {
      email: email,
      password: password,
    };
    let listOfRequests = null;
    signupWarehouse(data).then((response) => {
      console.log(response);
      console.log("success warehouse");
      if (response == null) {
        isAuthenticated = false;
      } else {
        isAuthenticated = true;
        listOfRequests = response;
        onLogin(listOfRequests);
      }
    });
  };

  return (
    <div className="w-1/2 mx-auto mt-20 bg-slate-200 p-6 rounded-md shadow-xl hover:shadow-slate-400">
      <h2 className="text-2xl font-bold mb-4 text-orange-500 ">
        {" "}
        Warehouse Login
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="w-3/5">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter your employee email id"
          />
        </div>
        <div className="w-3/5">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-2 rounded-md "
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Loginwarehouse;
