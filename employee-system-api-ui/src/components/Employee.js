import React from 'react'
import { useNavigate } from "react-router-dom";

const Employee = ({employee, deleteEmployee}) => {

    const navigate = useNavigate();

    const editEmployee = (e, id) =>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    };

  return (
    <tr key={employee.id}>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{employee.firstName}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{employee.lastName}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{employee.emailID}</div>
        </td>
        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <button onClick={(e, id) => editEmployee(e, employee.id)} className='rounded bg-green-400 text-white hover:text-indigo-800 px-4'>Edit</button>
            <button onClick={(e, id) => deleteEmployee(e, employee.id)} className='rounded bg-red-500 text-white hover:text-indigo-800 px-4'>Delete</button>
        </td>
    </tr>
  )
}

export default Employee