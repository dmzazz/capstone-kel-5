import { useState } from "react";
import Swal from 'sweetalert2'

const Add = ({ employees, setEmployees, setIsAdd }) => {
    const [firstName, setFirstName] = useState('');
    const [time, setTime] = useState('');
    const [alamat, setAlamat] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    
    const handleAdd = (e) => {
        e.preventDefault();

        if(!firstName || !time || !email || !alamat || !email || !image){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true,
            }); 
        }
        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            time,
            email,
            alamat,
            image: URL.createObjectURL(image),
        }

        employees.push(newEmployee);
        localStorage.setItem('employees_data', JSON.stringify(employees));
        setEmployees(employees)
        setIsAdd(false)

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500,
        });
    }
         
    return(
        <>
            <h2 className="text-center">Add Employee</h2>
            <form onSubmit={ handleAdd }>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="firstName" value={firstName} className="form-control" onChange={e => setFirstName(e.target.value)}  id="firstName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="time" className="form-label">Time</label>
                    <input type="text"  className="form-control" id="time" onChange={e => setTime(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={ e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="alamat" className="form-label">Address</label>
                    <input type="text" value={alamat } name="alamat" className="form-control" id="alamat" onChange={e => setAlamat(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image" accept="image/*" onChange={e => setImage(e.target.files[0])} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="submit" className="btn btn-outline-dark mx-2" onClick={() => setIsAdd(false)}>Cancel</button>
            </form>
        </>
    )
}

export default Add;