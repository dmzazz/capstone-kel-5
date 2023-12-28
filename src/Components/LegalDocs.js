import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          SelfCare <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">Informasi Umum</p>
        <p className="legal-description">
          Selamat datang di Health Plus, platform layanan kesehatan online
          tepercaya Anda. Misi kami adalah menyediakan layanan kesehatan yang
          mudah diakses dan dipersonalisasi untuk individu yang mencari
          saran medis dan perawatan ahli. Dengan menggunakan platform kami, Anda
          setuju dengan ketentuan yang diuraikan dalam Kebijakan Privasi dan
          Syarat Layanan kami.
        </p>

        <p className="legal-title">Kebijakan Privasi</p>
        <p className="legal-description">
          Privasi Anda sangat penting bagi kami. Kebijakan Privasi kami
          menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
          informasi pribadi dan medis Anda. Kami menjamin penanganan data yang
          aman, dan Anda dapat mempercayai bahwa informasi Anda dijaga dengan
          kerahasiaan tertinggi.
        </p>

        <p className="legal-title">Syarat Layanan</p>
        <p className="legal-description">
          Dengan menggunakan Health Plus, Anda menyetujui Syarat Layanan kami.
          Ini mencakup panduan untuk menggunakan platform kami, berinteraksi
          dengan dokter, dan tanggung jawab kedua belah pihak. Penting untuk
          memahami ketentuan ini untuk memastikan pengalaman yang lancar bagi
          semua pengguna.
        </p>

        <p className="legal-title">Konsultasi</p>
        <p className="legal-description">
          Platform kami menghubungkan Anda dengan dokter ahli yang menyediakan
          konsultasi online. Konsultasi ini bukan pengganti dari kunjungan medis
          langsung, tetapi menjadi pilihan yang nyaman untuk saran medis,
          resep, dan panduan. Penting untuk memberikan informasi yang akurat dan
          lengkap untuk mendapatkan perawatan terbaik.
        </p>

        <p className="legal-title">Cara Kerjanya</p>
        <p className="legal-description">
          Health Plus dirancang untuk menyederhanakan akses ke layanan kesehatan.
          Anda dapat memilih spesialis, menjadwalkan janji, dan melakukan
          konsultasi virtual. Spesialis kami menawarkan saran dan rencana
          perawatan yang dipersonalisasi sesuai dengan kebutuhan Anda. Harap
          diingat bahwa keadaan darurat memerlukan perhatian medis segera dan
          sebaiknya ditujukan ke fasilitas medis lokal Anda.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2023 SelfCare. Seluruh hak cipta dilindungi.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
