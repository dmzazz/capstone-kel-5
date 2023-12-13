import React, { useState } from "react";

const AdminLogin = () => {
  const [adminUsername, setAdminUsername] = useState("");
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [formComplete, setFormComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminUsername && adminId && adminPassword) {
      // Proses login admin
      setFormComplete(true);
      // Lakukan autentikasi atau operasi login admin di sini
    } else {
      alert("Form belum lengkap!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adminUsername">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="adminUsername"
            type="text"
            placeholder="Admin Username"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adminId">
            ID Admin
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="adminId"
            type="text"
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adminPassword">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="adminPassword"
            type="password"
            placeholder="Admin Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          {formComplete && <p className="text-green-500 text-sm">Login berhasil!</p>}
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
