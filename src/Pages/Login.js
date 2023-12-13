// import React from "react";

// const Login = () => {
//   return (
//     <>
//       <div>
//         Ini halaman Login
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "../Styles/Login.css";


// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [formComplete, setFormComplete] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username && password) {
//       // Proses login
//       setFormComplete(true);
//       // Lakukan autentikasi atau operasi login di sini
//     } else {
//       alert("Form belum lengkap!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-500">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="username"
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Submit
//           </button>
//           {formComplete && <p className="text-green-500 text-sm">Login berhasil!</p>}
//         </div>
//         <p className="text-sm mt-4">
//           Login sebagai admin{" "}
//           <a href="/admin" className="text-blue-500 hover:underline">
//             klik here
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formComplete, setFormComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // Proses login
      setFormComplete(true);
      // Lakukan autentikasi atau operasi login di sini
    } else {
      alert("Form belum lengkap!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          {formComplete && (
            <p className="text-green-500 text-sm">
              Login berhasil!{' '}
              <a href="/balik" className="text-green-500 underline hover:text-green-700">
                ke halaman beranda
              </a>
            </p>
          )}
        </div>
        <p className="text-sm mt-4">
          Login sebagai admin klik{' '}
          <a href="/admin" className="text-blue-500 hover:underline">
            here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../Styles/Login.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [formComplete, setFormComplete] = useState(false);
//   const navigate = useNavigate(); // Menginisialisasi fungsi navigate

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username && password) {
//       // Proses login
//       setFormComplete(true);
//       // Lakukan autentikasi atau operasi login di sini

//       // Navigasi ke halaman Home setelah login berhasil
//       navigate("/home");
//     } else {
//       alert("Form belum lengkap!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-500">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="username"
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Submit
//           </button>
//           {formComplete && (
//             <p className="text-green-500 text-sm">
//               Login berhasil!{' '}
//               <span
//                 className="text-green-500 underline hover:text-green-700 cursor-pointer"
//                 onClick={() => navigate("/home")}
//               >
//                 Kembali ke halaman beranda
//               </span>
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
