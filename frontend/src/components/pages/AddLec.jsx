import React, { useState } from 'react'
import axios from 'axios'

const AddLec = () => {

  const [lecData, setLecData] = useState({
    // Define your form fields here
    lecturer_id:'',
    first_name: '',
    last_name :'',
    user_name :'',
    phone_number:'',
    email_address:'',

    // Add more fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/lecturer',lecData)
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
Add Lecturer

          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                LectuerID
              </label>
              <div className="mt-2">
                <input
                  id="lecid"
                  name="lecid"
                  type="lecid"
                  autoComplete="lecid"
                  value={lecData.lecturer_id}
                  onChange={(e) => setLecData({ ...lecData, lecturer_id: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Firstname
              </label>
              <div className="mt-2">
                <input
                  id="fname"
                  name="fname"
                  type="fname"
                  autoComplete="fname"
                  value={lecData.first_name}
                  onChange={(e) => setLecData({ ...lecData, first_name: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
Lastname            
  </label>
              <div className="mt-2">
                <input
                  id="lname"
                  name="lname"
                  type="lname"
                  autoComplete="lname"
                  alue={lecData.last_name}
                  onChange={(e) => setLecData({ ...lecData, last_name: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  alue={lecData.email_address}
                  onChange={(e) => setLecData({ ...lecData, email_address: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
    Phone number              
     </label>
                <div className="text-sm">
                  {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a> */}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="current-phone"
                  alue={lecData.phone_number}
                  onChange={(e) => setLecData({ ...lecData, phone_number: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddLec