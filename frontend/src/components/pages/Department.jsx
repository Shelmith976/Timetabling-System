import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Department() {
  const[data, setData]=useState([])
  // useEffect(()=>{
  //   axios.get('http://localhost:8081/Department')
  //   .then(res=>setData(res.data))
  //   // .then(res=>res.json())
  //   // .then(data=>console.log(data))
  //   .catch(err=>console.log(err))
  // })
  const [formData, setFormData] = useState({
    // Define your form fields here
    dpt_id: '',
    dpt_name:''
    // Add more fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/department',formData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))



    // if (res.ok) {
    //       console.log('Form submitted successfully');
    //     } else {
    //       console.error('Form submission failed');
    // }
    const newdata={...formData}
    newdata[e.target.id]=e.target.value
    setFormData(newdata)
    // const [alert, setAlert] =useState({
    //   type: 'error',
    //   text: 'This is a alert message',
    //   show: false
    // })
  
    // function onCloseAlert() {
    //   setAlert({
    //     type: '',
    //     text: '',
    //     show: false
    //   })
    // }
  
    // function onShowAlert(type) {
    //   setAlert({
    //     type: type,
    //     text: 'Demo alert',
    //     show: true
    //   })
    // }
    // console.log(newdata)
    // try {
    //   const response = await fetch('http://localhost:8081/api/submit-form', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ formData }),
    //   });
    //   if (response.ok) {
    //     console.log('Form submitted successfully');
    //   } else {
    //     console.error('Form submission failed');
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
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
Add Department

    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit} method="POST">
    <div>
        <label htmlFor="course id" className="block text-sm font-medium leading-6 text-gray-900">
      Department ID
        </label>
        <div className="mt-2">
          <input
            id="did"
            name="did"
            value={formData.dpt_id}
            onChange={(e) => setFormData({ ...formData, dpt_id: e.target.value })}
            type="did"
            autoComplete="did"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="course name" className="block text-sm font-medium leading-6 text-gray-900">
Department Name            
</label>
        <div className="mt-2">
          <input
            id="dname"
            name="dname"
            value={formData.dpt_name}
            onChange={(e) => setFormData({ ...formData, dpt_name: e.target.value })}
            type="dname"
            autoComplete="dname"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button onSubmit={handleSubmit} method="POST"
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

export default Department