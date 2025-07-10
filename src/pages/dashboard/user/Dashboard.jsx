import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [konsul, setKonsul] = useState([]);
  const [doctorChoise, setDoctorChoise] = useState({});
  const [keluhan, setKeluhan] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role === "user") {
      setUser(user);
    } else {
      window.location.href = "/";
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleClose = () => setIsModal(false);
  const handleShow = () => setIsModal(true);

  const getDoctor = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/doctors`);
      const data = res.data;

      setDoctor(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getKonsul = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/konsuls`);
      const data = res.data;

      const isUser = data.filter((item) => item.email === user.email);

      setKonsul(isUser);
    } catch (error) {
      console.log(error);
    }
  };

  const randomString = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const handlePostKonsul = async () => {
    try {
      if (keluhan === "") {
        toast.error("Masukan keluhan terlebih dahulu");
        return;
      }

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/konsuls`, {
        name: user.name,
        email: user.email,
        keluhan: keluhan,
        doctor: doctorChoise.name,
        linkMeet: `https://meet.google.com/${randomString(5)}`,
        date: new Date().toISOString().slice(0, 10),
      });

      toast.success("Berhasil membuat konsultasi");
      getKonsul();
      setKeluhan("");
      handleClose();
      return res.data;
    } catch (error) {
      toast.error("Gagal membuat konsultasi");
    }
  };

  useEffect(() => {
    getKonsul();
  }, [user]);

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1>Dashboard User</h1>
        {user ? (
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {user.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">
                <span>Home</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={logout}>
                <span>Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/login">
            <button className="navbar-btn" type="button">
              Login
            </button>
          </Link>
        )}
      </div>
      <div className="card">
        <div className="card-header">
          <h3>Daftar Doctor Yang tersedia</h3>
        </div>
        <div className="card-body">
          <table className="table table-bordered mt-3">
            <thead className="bg-dark text-white">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctor.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        setDoctorChoise(doctor);
                        handleShow();
                      }}
                      className="btn btn-info me-2"
                    >
                      Ajukan Konsultasi
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {konsul.length > 0 && (
        <div className="card mt-5">
          <div className="card-header">
            <h3>Daftar Konsultasi dengan Doctor</h3>
          </div>
          <div className="card-body">
            <table className="table table-bordered mt-3">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Nama Doctor</th>
                  <th>Keluhan</th>
                  <th>Tanggal</th>
                  <th>Link Meet</th>
                </tr>
              </thead>
              <tbody>
                {konsul.map((konsul) => (
                  <tr key={konsul.id}>
                    <td>{konsul.doctor}</td>
                    <td>{konsul.keluhan}</td>
                    <td>{konsul.date}</td>
                    <td>{konsul.linkMeet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <Modal show={isModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Ajukan Konsultasi dengan Dokter {doctorChoise.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              className="form-control"
              id="nama"
              placeholder="Masukkan Nama"
              value={user.name}
              disabled
            />

            <label htmlFor="email" className="mt-3">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Masukkan Email"
              value={user.email}
              disabled
            />

            <label htmlFor="keluhan" className="mt-3">
              Keluhan
            </label>
            <textarea
              className="form-control"
              id="keluhan"
              rows="3"
              placeholder="Masukkan Keluhan"
              value={keluhan}
              onChange={(e) => setKeluhan(e.target.value)}
            ></textarea>

            <label htmlFor="doctor" className="mt-3">
              Doctor
            </label>
            <input
              type="text"
              className="form-control"
              id="doctor"
              placeholder="Masukkan Doctor"
              value={doctorChoise.name}
              disabled
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handlePostKonsul}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
