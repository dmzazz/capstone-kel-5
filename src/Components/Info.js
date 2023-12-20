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
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
