import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

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
<<<<<<< HEAD
          <p className="text-headline">Jaga Kesehatan Mentalmu ❤️</p>
          <h2 className="text-title">
          Pandangan baru untuk kesehatan pikiranmu
          </h2>
          <p className="text-descritpion">
          Temui kesehatan mental yang lebih baik dengan berbicara kepada dokter ahli.
           Dapatkan saran, resep dan catatan kesehatan Anda dengan mudah. Pengalaman layanan kesehatan 
           sesuai permintaan, semua di ujung jari Anda.
=======
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">
            Find your Doctor and make an Appointments
          </h2>
          <p className="text-descritpion">
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
>>>>>>> c27c9b3bc2e1b3599775ce13479fdad6de7ea723
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
<<<<<<< HEAD
            <FontAwesomeIcon icon={faCalendarCheck} /> Jadwalkan Konsultasi
=======
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
>>>>>>> c27c9b3bc2e1b3599775ce13479fdad6de7ea723
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
<<<<<<< HEAD
              <p>Menerima Pasien</p>
=======
              <p>Receive Patients</p>
>>>>>>> c27c9b3bc2e1b3599775ce13479fdad6de7ea723
            </div>

            <div className="text-stats-container">
              <p>50+</p>
<<<<<<< HEAD
              <p>Dokter Ahli</p>
=======
              <p>Expert Doctors</p>
>>>>>>> c27c9b3bc2e1b3599775ce13479fdad6de7ea723
            </div>

            <div className="text-stats-container">
              <p>10+</p>
<<<<<<< HEAD
              <p>Pengalaman</p>
=======
              <p>Years of Experience</p>
>>>>>>> c27c9b3bc2e1b3599775ce13479fdad6de7ea723
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
