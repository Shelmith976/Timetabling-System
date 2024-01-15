import React, { useState } from 'react'
import axios from 'axios'

const AddUnit = () => {
  const [unitData, setUnitData] = useState({
    // Define your form fields here
    
    unit_code: '',
    unit_name :'',
    lecturer_id:''

    // Add more fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/unit',unitData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
  Add Unit
  
      </h2>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit} method="POST">
      <div>
          <label htmlFor="unit code" className="block text-sm font-medium leading-6 text-gray-900">
Unit Code         
 </label>
          <div className="mt-2">
            <input
              id="unitcode"
              name="unitcode"
              type="unitcode"
              autoComplete="unitcode"
              value={unitData.unit_code}
              onChange={(e) => setUnitData({ ...unitData, unit_code: e.target.value })}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="unit name" className="block text-sm font-medium leading-6 text-gray-900">
  Unit Name            
  </label>
          <div className="mt-2">
            <input
              id="unitname"
              name="unitname"
              type="unitname"
              autoComplete="unitname"
              value={unitData.unit_name}
              onChange={(e) => setUnitData({ ...unitData, unit_name: e.target.value })}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Lecturer Id" className="block text-sm font-medium leading-6 text-gray-900">
  Lecturer ID           
  </label>
          <div className="mt-2">
            <input
              id="lecid"
              name="lecid"
              type="lecid"
              autoComplete="lecid"
              value={unitData.lecturer_id}
              onChange={(e) => setUnitData({ ...unitData, lecturer_id: e.target.value })}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
  
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md
             bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6
              text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>  )
}

export default AddUnit