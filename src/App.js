// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// import Login from "./Pages/Login";
// import Home from "./Pages/Home";
// import Legal from "./Pages/Legal";
// import NotFound from "./Pages/NotFound";
// import Appointment from "./Pages/Appointment";

// function App() {
//   return (
//     <div className="App">
//       <Router basename="/Health-Plus">
//         {/* Navigasi menggunakan Link */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Login</Link>
//             </li>
//             <li>
//               <Link to="../Pages/Home.js">Home</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Konten aplikasi */}
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/balik" element={<Home />} />
//           <Route path="/legal" element={<Legal />} />
//           <Route path="/appointment" element={<Appointment />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Dashboard></Dashboard>
      </div>  
    </div>
  );
}
export default App;