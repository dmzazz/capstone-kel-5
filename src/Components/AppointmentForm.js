import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import doctorForm from "../Assets/book-doctor-appointment-form.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientEmail.trim()) {
      errors.patientEmail = "Patient email is required";
    } else if (!/\S+@\S+\.\S+/.test(patientEmail)) {
      errors.patientEmail = "Patient email is invalid";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientEmail("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <div
        className="d-flex position-relative flex-column justify-content-center gap-2"
        style={{
          height: "100vh",
          maxHeight: "100vh",
        }}
      >
        <Link
          to="/"
          className="fw-bold position-absolute"
          title="Go to Home Page"
          style={{
            top: "20px",
            left: "20px",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            style={{
              fontSize: "30px",
              paddingRight: "6px",
            }}
          />
        </Link>
        <h1 className="legal-siteTitle">
          <Link to="/" className="fw-bold">
            SelfCare<span className="legal-siteSign"></span>
          </Link>
        </h1>
        <div className="d-flex flex-column align-items-center">
          <h2>Book Your Appointment </h2>
          <img src={doctorForm} alt="doctor-form" className="doctor-form-img" />
        </div>
        <div
          className="text-center position-absolute"
          style={{
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <p>© 2023 SelfCare. All rights reserved.</p>
        </div>
      </div>
      <div className="d-flex flex-column w-100 h-100">
        <div className="form-container px-5 h-100">
          <h2 className="form-title">
            <span>Appointment Form</span>
          </h2>

          <form className="form-content" onSubmit={handleSubmit}>
            <label>
              Patient Full Name:
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
              {formErrors.patientName && (
                <p className="error-message">{formErrors.patientName}</p>
              )}
            </label>

            <label>
              Patient Email:
              <input
                type="email"
                value={patientEmail}
                onChange={(e) => setPatientEmail(e.target.value)}
                required
              />
              {formErrors.patientEmail && (
                <p className="error-message">{formErrors.patientEmail}</p>
              )}
            </label>

            <label>
              Patient Phone Number:
              <input
                type="text"
                value={patientNumber}
                onChange={(e) => setPatientNumber(e.target.value)}
                required
              />
              {formErrors.patientNumber && (
                <p className="error-message">{formErrors.patientNumber}</p>
              )}
            </label>

            <label>
              Patient Gender:
              <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                required
              >
                <option value="default">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="private">I will inform Doctor only</option>
              </select>
              {formErrors.patientGender && (
                <p className="error-message">{formErrors.patientGender}</p>
              )}
            </label>

            <label>
              Preferred Appointment Time:
              <input
                type="datetime-local"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
              {formErrors.appointmentTime && (
                <p className="error-message">{formErrors.appointmentTime}</p>
              )}
            </label>

            <label>
              Preferred Mode:
              <select
                value={preferredMode}
                onChange={(e) => setPreferredMode(e.target.value)}
                required
              >
                <option value="default">Select</option>
                <option value="voice">Voice Call</option>
                <option value="video">Video Call</option>
              </select>
              {formErrors.preferredMode && (
                <p className="error-message">{formErrors.preferredMode}</p>
              )}
            </label>

            <button type="submit" className="text-appointment-btn mt-4">
              Confirm Appointment
            </button>

            <p
              className="success-message"
              style={{ display: isSubmitted ? "block" : "none" }}
            >
              Appointment details has been sent to the patients phone number via
              SMS.
            </p>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
