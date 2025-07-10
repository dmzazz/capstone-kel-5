import { Table } from 'react-bootstrap';

const TableList = ({ employees, handleDelete, handleEdit }) => { 
    return(
        <>
        <Table className="table table-striped">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>FirstName</th>
                    <th>Time Management</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { employees.length > 0 ? (
                employees.map((employee, i) => (
                    <tr key={ employee.id }>
                        <td>{ i + 1 }</td>
                        <td>{ employee.firstName }</td>
                        <td>{ employee.time }</td>
                        <td>{ employee.email }</td>
                        <td>{ employee.alamat }</td>
                        <td>{ employee.image }</td>
                        <td><button className='btn btn-secondary' onClick={() => handleEdit(employee.id) }>Edit</button> <button className='btn btn-danger' onClick={() => handleDelete(employee.id) }>Delete</button></td>
                    </tr>
                ) ) ) : (
                    <tr>
                        <td>No Employees</td>
                    </tr>
                    )
                }
            </tbody>
        </Table>
        </>

)}
export default TableList;