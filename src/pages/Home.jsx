// import React from "react";
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Info from "../components/Info";
// import About from "../components/About";
// import BookAppointment from "../components/BookAppointment";
// import Reviews from "../components/Reviews";
// import Doctors from "../components/Doctors";
// import Footer from "../components/Footer";

// function Home() {
//   return (
//     <div className="home-section">
//       <Navbar />
//       <Hero />
//       <Info />
//       <About />
//       <BookAppointment />
//       <Reviews />
//       <Doctors />
//       <Footer />
//     </div>
//   );
// }

// export default Home;

import React from "react";
import Navbar from "../layouts/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import About from "../components/About/About";
import BookAppointment from "../components/BookAppointment/BookAppointment";
// import Doctors from "../components/Doctors";
import Footer from "../layouts/Footer/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      {/* <Doctors /> */}
      <Footer />
    </div>
  );
}

export default Home;
