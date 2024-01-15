import React, { useState } from 'react'
import axios from 'axios'


function AddCourse() {  

  const [courseData, setCourseData] = useState({
    // Define your form fields here
    c_id: '',
    c_name:'',
    dpt_id:''
    // Add more fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/course',courseData)
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
Add Course

    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6"  onSubmit={handleSubmit} method="POST">
    <div>
        <label htmlFor="course id" className="block text-sm font-medium leading-6 text-gray-900">
      Course ID
        </label>
        <div className="mt-2">
          <input
            id="cid"
            name="cid"
            type="cid"
            value={courseData.c_id}
            onChange={(e) => setCourseData({ ...courseData, c_id: e.target.value })}
            autoComplete="cid"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="course name" className="block text-sm font-medium leading-6 text-gray-900">
Course Name            
</label>
        <div className="mt-2">
          <input
            id="cname"
            name="cname"
            type="cname"
            autoComplete="cname"
            value={courseData.c_name}
            onChange={(e) => setCourseData({ ...courseData, c_name: e.target.value })}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="initials" className="block text-sm font-medium leading-6 text-gray-900">
Initials        </label>
        <div className="mt-2">
          <input
            id="initials"
            name="initials"
            type="initials"
            autoComplete="initials"
            value={courseData.dpt_id}
            onChange={(e) => setCourseData({ ...courseData, dpt_id: e.target.value })}
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
</div>
  )
}

export default AddCourse