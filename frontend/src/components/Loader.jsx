import React from 'react';
function Loader() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center font-bold bg-white z-50"
    >
      
      <div className="relative">
       
        Meet Genie
        
        <div className="absolute -inset-6 border-4 border-opacity-25 border-purple-500 border-t-4 border-t-gray-500 rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
}

export default Loader;