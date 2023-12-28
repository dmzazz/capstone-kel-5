import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

import { Link } from "react-router-dom";

const DashboardAdmin = () => {
  const [user, setUser] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [postDoctor, setPostDoctor] = useState({
    code: "",
    name: "",
    email: "",
  });
  const [doctor, setDoctor] = useState([]);
  const [konsul, setKonsul] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role === "admin") {
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
      const res = await axios.get("http://localhost:8000/doctors");
      const data = res.data;

      setDoctor(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getKonsul = async () => {
    try {
      const res = await axios.get("http://localhost:8000/konsuls");
      const data = res.data;

      setKonsul(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctor();
    getKonsul();
  }, []);

  const handleAddDoctor = async () => {
    try {
      if (
        postDoctor.code === "" ||
        postDoctor.name === "" ||
        postDoctor.email === ""
      ) {
        toast.error("Isi semua form yang ada");
        return;
      }

      const res = await axios.post("http://localhost:8000/doctors", postDoctor);

      toast.success("Add doctor success");
      getDoctor();

      setPostDoctor({
        code: "",
        name: "",
        email: "",
      });

      setIsModal(false);

      return res.data;
    } catch (error) {
      toast.error("Add doctor failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/doctors/${id}`);

      toast.info("Delete doctor success");

      getDoctor();
      return res.data;
    } catch (error) {
      toast.error("Delete doctor failed");
    }
  };

  const handleEdit = async (id) => {
    const res = await axios.get(`http://localhost:8000/doctors/${id}`);
    const data = res.data;
    setIsEdit(true);
    setPostDoctor(data);
    setIsModal(true);
  };

  const handleEditDoctor = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8000/doctors/${postDoctor.id}`,
        postDoctor
      );

      toast.success("Edit doctor success");

      getDoctor();

      setPostDoctor({
        code: "",
        name: "",
        email: "",
      });

      setIsModal(false);

      return res.data;
    } catch (error) {
      toast.error("Edit doctor failed");
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1>Dashboard Admin</h1>
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
          <h3>Daftar Doctor</h3>
        </div>
        <div className="card-body">
          <Button variant="success" onClick={handleShow}>
            Add (+)
          </Button>
          <table className="table table-bordered mt-3">
            <thead className="bg-dark text-white">
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctor.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.code}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleEdit(doctor.id)}
                      className="btn btn-warning"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(doctor.id)}
                      className="btn btn-danger"
                    >
                      Delete
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
                  <th>Nama Pasien</th>
                  <th>Email Pasien</th>
                  <th>Doctor</th>
                  <th>Keluhan</th>
                  <th>Tanggal</th>
                  <th>Link Meet</th>
                </tr>
              </thead>
              <tbody>
                {konsul.map((konsul) => (
                  <tr key={konsul.id}>
                    <td>{konsul.name}</td>
                    <td>{konsul.email}</td>
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
      <Modal show={isModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? "Edit data doctor" : "Tambah doctor baru"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Code</label>
            <input
              type="text"
              className="form-control"
              value={postDoctor.code}
              onChange={(e) =>
                setPostDoctor({ ...postDoctor, code: e.target.value })
              }
            ></input>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={postDoctor.name}
              onChange={(e) =>
                setPostDoctor({ ...postDoctor, name: e.target.value })
              }
            ></input>
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={postDoctor.email}
              onChange={(e) =>
                setPostDoctor({ ...postDoctor, email: e.target.value })
              }
            ></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button
            variant="primary"
            onClick={isEdit ? handleEditDoctor : handleAddDoctor}
          >
            {isEdit ? "Submit Edit" : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DashboardAdmin;
