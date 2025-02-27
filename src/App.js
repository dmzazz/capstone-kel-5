import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import UserLogin from "./pages/user/login";
import AdminLogin from "./pages/admin/login";
import Dashboard from "./pages/dashboard/user/Dashboard";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Appointment from "./pages/Appointment";
import Consul from "./pages/Consul";
import DashboardAdmin from "./pages/dashboard/admin/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Konten aplikasi */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserLogin />} />
          <Route path="/admin" element={<AdminLogin />} />
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
