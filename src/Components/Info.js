import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Apa yang dapat kami lakukan</span>
        </h3>
        <p className="info-description">
        Kami berkomitmen untuk menyediakan akses mudah dan cepat ke layanan kesehatan mental berkualitas. 
        Melalui platform kami, Anda dapat dengan nyaman berbicara dengan dokter psikologi berpengalaman. 
        Kami memberikan saran medis, resep dan memudahkan pencatatan catatan kesehatan Anda. Tujuan kami 
        adalah memberikan layanan kesehatan sesuai permintaan yang menjawab kebutuhan kesehatan mental Anda, 
        semuanya dengan kenyamanan di ujung jari Anda.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Knowledge Psicologic"
          description="Sistem Informasi Psikologi kami didesain untuk menjadi sumber dukungan yang handal
          dalam mengelola informasi kesehatan mental.
          Baik itu untuk perencanaan sesi konseling, atau memantau perkembangan klien, 
          tim kami yang berdedikasi siap membantu 24/7 untuk memastikan layanan yang efisien dan terpercaya."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Professional Doctor"
          description="Tim ahli psikologi berpengalaman kami menggunakan metode terapi terkini dan teknik evaluasi
          untuk memahami serta mendukung kesejahteraan mental Anda secara menyeluruh.
          Dengan keahlian dalam konseling individu,
          kami berkomitmen membantu Anda mengatasi tantangan mental
          dengan pengertian dan perencanaan yang tepat."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Schedule Concultation"
          description="Tim kami memberikan penerapan jadwal dengan pengelolaan baik
          sesuai dengan permintaan client. Tim kami berdedikasi tinggi sebagai jembatan untuk para client
          dengan dokter tim kami agar jadwal dapat terlaksana dengan sebaiknya"
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
