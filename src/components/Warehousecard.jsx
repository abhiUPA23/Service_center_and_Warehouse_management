import React, { useState } from "react";
import { updatePendingWarehouse } from "../services/user-service";

const Warehousecard = ({ request }) => {
    const [text, settext] = useState('Approve');
    const [isPending, setisPending] = useState(false);
    const [random_id, setrandom_id] = useState('')
    let count=0;
    const handleApprove=()=>{
      setisPending(true);
      settext('Approved');
     if(count===0) setrandom_id(Math.random());
      count++;
      updatePendingWarehouse(request).then((response)=>{
        console.log(response);
        console.log("success");
          
      });

    }
    return (
  

<>
    <div className="main-ware inline-block w-1/3 mx-4 pt-6">

      <div className="main-card p-2 bg-gray-100 rounded-md max-w-sm bg-slate-300 pt-4 ">
  
        <h2 className="text-xl font-bold mb-4 text-orange-600">Pending Request</h2>
        <div className="mb-4">
        <strong>Invoice:</strong>
        {/* <p>Name: {request.name}</p>
        <p>Email: {request.email}</p>
        <p>Phone: {request.phone}</p> */}
        <p>Request Id: {random_id}</p>
        <p className="text-red-700">Warehouse Id:{request.warehouseSkUid}</p>
      </div>
      <div>
        <strong>Service Information:</strong>
        <p>Model Name: {request.modelName}</p>
        <p>Part Name: {request.partName}</p>
        {/* <p>Part ID: {request.partId}</p> */}
        <p>Service Centre ID: {request.serviceCenterSkUid}</p>
        <p>Expected Time: {request.expectedTransportTime} </p>
        <p>Quantity required:1</p>
        <p>Priority:{request.priority?request.priority:"NA"}</p>
        {/* <p>Expected Price: {request.expectedPrice}</p> */}

      </div >

        <button className='btn  bg-blue-500 text-white px-4 py-2 my-1 rounded-md max-w-sm' onClick={handleApprove}>{text}</button>

      </div>
      
    </div>
      </>
      
    );
  };
  
  export default Warehousecard;