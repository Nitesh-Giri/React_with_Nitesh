import React, { useState } from 'react';

const SignInPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={togglePopup}
      >
        Sign In
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <span 
              className="absolute top-2 right-4 text-xl cursor-pointer" 
              onClick={togglePopup}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form>
              <label className="block mb-2 font-medium" htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="border border-gray-300 w-full p-2 rounded mb-4"
                required 
              />
              <label className="block mb-2 font-medium" htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                className="border border-gray-300 w-full p-2 rounded mb-4"
                required 
              />
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInPopup;