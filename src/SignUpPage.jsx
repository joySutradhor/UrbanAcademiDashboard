/* eslint-disable react/prop-types */
import { useState } from 'react';
// import { useHistory } from 'react-router-dom'; 

const SignUpPage = () => {
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [pass, setPass] = useState('');
//   const history = useHistory();

  const handleClose = () => {
      window.location.reload()
  }

  const handleSubmit = () => {
    // Check if updatedTitle is 'admin' and pass is '01627505755'
    if (updatedTitle === 'admin' && pass === '01627505755') {
      // Navigate to the dashboard route
      window.location.href = '/dashboarddkjrkdfodserndkfddfdee';
    
      alert("Login Dashboard")
    } else {
        alert("Invalid Username or Password")
      
     
    }
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-800">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" aria-hidden="true" ></div>
        <div className="relative bg-gray-700 rounded-sm max-w-md mx-auto overflow-hidden shadow-md transform transition-all sm:w-full sm:max-w-lg">
          <div className="px-6 py-4">
            <div className="flex justify-between items-start">
              <div className="text-lg text-gray-300 font-semibold mb-8 ">
                <h2 className="text-lg text-gray-300 font-semibold">Login Dashboard</h2>
              </div>
              
            </div>
            <div className='flex flex-col w-[90%]'>
              <input
                type="text"
                placeholder='Enter UserName'
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
              />
              <input
                type="password"
                placeholder='Enter password'
                onChange={(e) => setPass(e.target.value)}
                className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm "
              />
            </div>
          </div>
          <div className="px-2 py-2 bg-gray-700 flex justify-end">
            <div>
              <button className="text-md py-2 px-4 rounded-md focus:outline-none text-green-500 font-semibold" onClick={handleSubmit}>Submit</button>
              <button className="text-md py-2 px-4 rounded-md focus:outline-none text-red-500 font-semibold" onClick={handleClose}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
