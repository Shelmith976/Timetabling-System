import React, { useState } from 'react';
import AddLec from './AddLec'
import AddCourse from './AddCourse'
import AddDepartment from './Department'
import AddUnit from './AddUnit';
import AddRoom from './AddRoom';

function Tt() {
  const [activeStep, setActiveStep] = useState(0);
  const steps=[
    {label:'Add Lectures'},
    {label:'Add Courses'},
    {label: 'Add Units'},
    {label: 'Add Rooms'},
    {label: 'Add Batch'},
    {label: 'Add  Department'}
  ]
  // Define form data and errors objects for each step
 
  const [errors, setErrors] = useState({}); // Define an errors object for validation

  // Define a function to navigate to a specific step
  const goToStep = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="flex flex-col">
      <div className="flex mb-4">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => goToStep(index)}
            className={`flex-grow flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer transition duration-150 ease-in-out ${
              index === activeStep ? 'bg-gray-300' : 'bg-gray-100'
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>

      {/* Personal Details */}
      {activeStep === 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          {/* Render personal details form fields */}
          <AddLec/>
        </div>
      )}

      {/* Education Background */}
      {activeStep === 1 && (
        <div className="bg-white rounded-lg shadow p-6">
          {/* Render education background form fields */}
          <AddCourse/>
        </div>
      )}

      {/* Employee Details */}
      {activeStep === 2 && (
        <div className="bg-white rounded-lg shadow p-6">
          {/* Render employee details form fields */}
          <AddUnit/>
        </div>
      )}

      {/* Area of Residence */}
      {activeStep === 3 && (
        <div className="bg-white rounded-lg shadow p-6">
          {/* Render area of residence form fields */}
          <AddRoom/>
        </div>
      )}

      {/* Summary */}
      {activeStep === 4 && (
        <div className="bg-white rounded-lg shadow p-6">
          {/* Render a summary of the entered data */}
        </div>
      )}

      {activeStep === 5 && (
        <div className="bg-white rounded-lg shadow p-6">
          {/* Render a summary of the entered data */}
          <AddDepartment/>
        </div>
        
      )}
    </div>
  );
}

export default Tt;