import React, { useEffect, useState } from "react";
import Doctor from "../../assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../../styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">SelfCare❤️</p>
          <h2 className="text-title">Bersama Menuju Kesejahteraan</h2>
          <p className="text-descritpion">"Kami berkomitmen untuk mendukung Anda dalam perjalanan kesehatan mental Anda. Mulai hari ini dengan langkah kecil menuju perubahan yang positif."</p>
          <button className="text-appointment-btn" type="button" onClick={handleBookAppointmentClick}>
            <FontAwesomeIcon icon={faCalendarCheck} /> Jadwalkan Konsultasi
          </button>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
