import React from "react";
import Doctor from "../../assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "../../styles/bookappointment.css";

function BookAppointment() {
  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Kenapa memilih SelfCare?</span>
        </h3>
        <p className="ba-description">
          Temukan alasan memilih Health Plus untuk kebutuhan kesehatan Anda. Rasakan perawatan ahli, kemudahan, dan solusi yang dipersonalisasi, menjadikan kesejahteraan Anda sebagai prioritas utama kami. Bergabunglah dengan kami dalam
          perjalanan menuju kesehatan yang lebih baik dan kehidupan yang lebih bahagia.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Dokter professional terbaik
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Sistem informasi jelas
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Jadwal Mudah dan Cepat
        </p>
      </div>
    </div>
  );
}

export default BookAppointment;
