import React from "react";

const ConsulDoctor = ({ doctors, handleRegister }) => {
  return (
    <>
      <h3 className="text-center my-3">Consul Doctor</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Foto</th>
            <th scope="col">Nama</th>
            <th scope="col">Jadwal</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <th scope="row">{index + 1}</th>
              <td>{/* Add doctor's photo rendering here */}</td>
              <td>{doctor.name}</td>
              <td>{doctor.schedule}</td>
              <td>{doctor.email}</td>
              <td>
                <button className="btn btn-primary" type="button" onClick={() => handleRegister(doctor.id)}>
                  Daftar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ConsulDoctor;
