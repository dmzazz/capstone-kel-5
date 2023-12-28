import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Selamat datang di Health Plus, tempat di mana kami menghadirkan solusi inovatif untuk Health Plus kesehatan mental Anda.
          Kami menyadari betapa pentingnya menjaga kesehatan mental. Oleh karena itu, kami dengan bangga mempersembahkan platform ini 
          sebagai teman setia Anda dalam perjalanan menuju kesejahteraan mental yang optimal.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Pilih Dokter"
          description="
          Temukan spesialis yang sempurna untuk Anda dan reservasi dengan mudah di Health Plus. Dokter-dokter ahli mengutamakan kesehatan Anda, menawarkan perawatan yang disesuaikan."
        />

        <SolutionStep
          title="Membuat Judul"
          description="Pilih dokter yang akan menjadi konsultor anda, dan biarkan tim medis kami yang berdedikasi memastikan kesejahteraan Anda dengan perawatan yang dipersonalisasi."
        />

        <SolutionStep
          title="Temukan Solusi"
          description="Dokter-dokter dan spesialis berpengalaman kami hadir untuk memberikan saran ahli dan merancang rencana perawatan yang dipersonalisasi, membantu Anda mencapai kesehatan terbaik yang memungkinkan."
        />
      </div>
    </div>
  );
}

export default About;
