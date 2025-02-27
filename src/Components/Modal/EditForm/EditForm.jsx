import { useState } from "react";
import Swal from 'sweetalert2'


const Edit = ({ employees, setEmployees, setIsEdit, selectedEmployee }) => {
    const id = selectedEmployee.id;
    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [time, setTime] = useState(selectedEmployee.time);
    const [alamat, setAlamat] = useState(selectedEmployee.alamat);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [image, setImage] = useState(null);
    
    const submitEdit = (e) => {
        e.preventDefault();
        if(!firstName || !time || !email || !alamat || !email || !image){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true,
            }); 
        }
        
        const employee = {
            id,
            firstName,
            time,
            email,
            alamat,
            image: URL.createObjectURL(image),
        }

        for(let i=0; i<employees.length; i++){
            if(employees[i].id == id){
                employees.splice(i, 1, employee)
                break;
            }
        }
        localStorage.setItem('employees_data', JSON.stringify(employees));
        setEmployees(employees)
        setIsEdit(false)

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName}'s data has been Edited.`,
            showConfirmButton: false,
            timer: 1500,
        });
    }
         
    return(
        <>
            <h2 className="text-center">Edit Employee</h2>
            <form onSubmit={ submitEdit }>
                <div className="mb-3 ">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="firstName" value={firstName} className="form-control" onChange={e => setFirstName(e.target.value)}  id="firstName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="time" className="form-label">Time</label>
                    <input type="text" value={time} name="time" className="form-control" id="time" onChange={e => setTime(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} id="email" onChange={ e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="alamat" className="form-label">Address</label>
                    <input type="text" value={alamat} name="alamat" className="form-control" id="alamat" onChange={e => setAlamat(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image" accept="image/*" onChange={e => setImage(e.target.files[0])} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-outline-dark mx-2" onClick={() => setIsEdit(false)}>Cancel</button>
            </form>
        </>
    )
}

export default Edit;