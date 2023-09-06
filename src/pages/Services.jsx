import React, { useState, useEffect } from 'react';
import Pr from "../components/Pr";
import Form from "../components/Form";
import './Model.css'

export default function Services({response}) {
  const [Pendingrequests, setPendingrequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem('Pendingrequests')) || [];
    setPendingrequests(storedRequests);
  }, []);

  useEffect(() => {
    localStorage.setItem('Pendingrequests', JSON.stringify(Pendingrequests));
  }, [Pendingrequests]);

  // Define onSubmit function
  const handleCreateRequest = (requestData) => {

    setPendingrequests([...Pendingrequests, requestData]);
  };
  
  // const handleLogOut=()=>{
  //     window.location.href='./servicecenter';
  // }

  return (
    <>

      <div className="maincont flex justify-between bg-gray-800 min-h-screen ">

            <div className="service-container w-2/4 pt-8 mx-4">

                  <Form onSubmit={handleCreateRequest} skUid={response} />

             </div>
             <div className="pending-request-cont w-1/5 pt-4 pb-4">

              <div className="flex justify-end mx-2">
              {/* <button className='btn bg-red-500 text-white px-4 rounded-md max-w-sm  w-1/4' onClick={handleLogOut}>Log out</button> */}
              </div>

                  {Pendingrequests.map((request, index) => (
                    <Pr key={index} request={request} />   ))}
             </div>
      </div>
        
    </>
  );
}
