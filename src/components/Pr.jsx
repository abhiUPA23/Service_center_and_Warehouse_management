import React from 'react';


const Pr = ({ request }) => {
  

  return (
    <div className="main-card px-4 py-2 w-4/5 bg-gray-200 rounded-md ">

      <h2 className="text-xl font-bold mb-4 text-yellow-600">Pending Request</h2>
       <div className="mb-4">
        <strong>Customer Information:</strong>
        <p>Name: {request.name}</p>
        <p>Email: {request.email}</p>
        <p>Phone: {request.phone}</p>
      </div>
      <div>
        <strong>Service Information:</strong>
        <p>Model Name: {request.modelName}</p>
        <p>Part Name: {request.partName}</p>
        {/* <p>Part ID: {request.partId}</p> */}
        {/* <p>Service Centre ID: {request.serviceCenterSkUid}</p> */}
        <p >Expected Time: {request.expectedPartTime}+{request.expectedTransportTime?(request.expectedTransportTime+ "(transport time)"):[]} days</p>
        <p className='text-green-700'>Expected Price: ₹ {request.expectedPrice}</p>

      </div>

      
      
    </div>
  );
};

export default Pr;
