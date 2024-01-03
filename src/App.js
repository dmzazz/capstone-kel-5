import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Components/Dashboard";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Consul from "./Pages/Consul";
import DashboardAdmin from "./Components/DashboardAdmin";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navigasi menggunakan Link */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="../Pages/Home.js">Home</Link>
            </li>
          </ul>
        </nav> */}

        {/* Konten aplikasi */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/consul" element={<Consul />} />
          <Route path="/dashboard/admin" element={<DashboardAdmin />} />
          <Route path="/dashboard/user" element={<Dashboard />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import Dashboard from './Components/Dashboard';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// function App() {
//   return (
//     <div className='container'>
//       <div className='wrapper'>
//         <Dashboard></Dashboard>
//       </div>
//     </div>
//   );
// }
// export default App;
