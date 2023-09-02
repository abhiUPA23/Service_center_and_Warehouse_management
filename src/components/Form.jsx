import React, { useState } from 'react';
import { createServiceCenterRequest } from '../services/user-service';

const Form = ({ onSubmit, skUid }) => {

  const [alert, setAlert] = useState(false);
 

  const partsData = [
    {
      modelName: 'Redmi Note5',
      part_id: 3245,
      part_name: 'Battery',
      price: 1799,
      expected_time: 2,
    },
    {
      modelName: 'Redmi Note5',
      part_id: 2346,
      part_name: 'Front Cover Display Module-Redmi Note5-black',
      price: 1799,
      expected_time: 3,
    },
    {
      modelName: 'Redmi Note5 Pro',
      part_id: 1234,
      part_name: 'Mainboard Assy-Redmi Note5 Pro-IN-6+64G',
      price: 4299,
      expected_time: 1,
    },
    {
      modelName: 'Redmi Note5 Pro',
      part_id: 5678,
      part_name: 'Mainboard Assy-Redmi Note5 Pro-IN-4+64G',
      price: 3699,
      expected_time: 5,
    },
    {
      modelName: 'Redmi Note5',
      part_id: 9999,
      part_name: 'Battery',
      price: 699,
      expected_time: 0,
    },
    {
      modelName: 'Redmi Note5 Pro',
      part_id: 8888,
      part_name: 'Battery',
      price: 699,
      expected_time: 0,
    },
    {
      modelName: 'Redmi Note6',
      part_id: 1111,
      part_name: 'Battery',
      price: 699,
      expected_time: 1,
    },
    {
      modelName: 'Mi 11Lite',
      part_id: 2222,
      part_name: 'Battery',
      price: 699,
      expected_time: 2,
    },
    {
      modelName: 'Mi 11Lite',
      part_id: 3333,
      part_name: 'Front Cover Display Module - All Colour',
      price: 4399,
      expected_time: 3,
    },
    {
      modelName: 'Mi 11Lite',
      part_id: 4444,
      part_name: 'Main board components-Mi 11 Lite-India version-8GB+128GB',
      price: 11999,
      expected_time: 6,
    },
    {
      modelName: 'Mi 11Lite',
      part_id: 5555,
      part_name: 'Main board components-Mi 11 Lite-India version-6GB+128GB',
      price: 10999,
      expected_time: 6,
    },
    {
      modelName: 'M11 TV 55Inch LED',
      part_id: 6666,
      part_name: 'Front Cover Display Module',
      price: 36999,
      expected_time: 1,
    },
    {
      modelName: 'M11 TV 55Inch LED',
      part_id: 7777,
      part_name: 'Mainboard',
      price: 9999,
      expected_time: 2,
    },
    {
      modelName: 'Redmi 10 Power',
      part_id: 8888,
      part_name: 'Battery',
      price: 699,
      expected_time: 3,
    },
    {
      modelName: 'Redmi 10 Power',
      part_id: 9999,
      part_name: 'Front Cover Display Module - Tarnish',
      price: 3299,
      expected_time: 4,
    },
    {
      modelName: 'Redmi 10 Power',
      part_id: 1010,
      part_name: 'Mainboard Assy - 8+128G',
      price: 7999,
      expected_time: 2,
    },
    {
      modelName: 'XIAOMI ROBOT VACUUM MOP 2 PRO',
      part_id: 1111,
      part_name: 'Battery Box',
      price: 2399,
      expected_time: 3,
    },
    {
      modelName: 'XIAOMI ROBOT VACUUM MOP 2 PRO',
      part_id: 2222,
      part_name: 'Motherboard',
      price: 3999,
      expected_time: 4,
    },
    {
      modelName: 'POCO M2 Pro',
      part_id: 3333,
      part_name: 'Battery',
      price: 699,
      expected_time: 4,
    },
    {
      modelName: 'POCO M2 Pro',
      part_id: 4444,
      part_name: 'Mainboard Assy - 6+128G',
      price: 7199,
      expected_time: 3,
    },
    {
      modelName: 'POCO M2 Pro',
      part_id: 5555,
      part_name: 'Mainboard Assy - 6+64G',
      price: 6499,
      expected_time: 3,
    },
    {
      modelName: 'POCO M2 Pro',
      part_id: 6666,
      part_name: 'Mainboard Assy - 4+64G',
      price: 5999,
      expected_time: 3,
    },
    {
      modelName: 'POCO M2 Pro',
      part_id: 7777,
      part_name: 'Front Cover Display Module - All Colour',
      price: 3599,
      expected_time: 7,
    },

  ];
  
 //  to store available parts based on the selected model
 const [availableParts, setAvailableParts] = useState([]);

 const handleModelChange = (e) => {
   const selectedModel = e.target.value;
   setServiceInfo({ ...serviceInfo, modelName: selectedModel });
   
   // Filter and store parts for the selected model
   const partsForModel = partsData.filter((part) => part.modelName === selectedModel);
   setAvailableParts(partsForModel);
 };








  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [serviceInfo, setServiceInfo] = useState({
    modelName: '',
    partName: '',
    partId: "",
    remarks: "",
    priority: "",
  });


    const handleSubmit = (e) => {
      e.preventDefault();

    setAlert(true);
    setTimeout(() => {

        setAlert(false);

    }, 2000);

    const data = {
      customer_name: customerInfo.name,
      customer_email: customerInfo.email,
      customer_phone: customerInfo.phone,
      model_name: serviceInfo.modelName,
      part_name: serviceInfo.partName,
      serviceCenterSkUid: skUid,
      remarks: serviceInfo.remarks,
      priority: serviceInfo.priority
    }

    createServiceCenterRequest(data).then((response)=>{
      console.log(response);
      console.log("success");
      onSubmit(response);
    })

    // Clear the form fields
    setCustomerInfo({ name: '', email: '', phone: '' });
    setServiceInfo({ modelName: '', partName: '', partId: '', serviceCentreId: '',remarks:'',priority:'' });
    };
  

  return (
    <>
    <form onSubmit={handleSubmit} className="p-4 pt-6 mx-2 bg-slate-400 rounded-md shadow-xl hover:shadow-slate-600" >
      {/* Customer Information */}
      <h3 className='pb-1 text-orange-700'>Create a service request here</h3>
      <input
        type="text"
        placeholder="Name"
        value={customerInfo.name}
        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
        className="w-full mb-2 p-2 rounded-md border"
      />
      <input
        type="email"
        placeholder="Email"
        value={customerInfo.email}
        onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
        className="w-full mb-2 p-2 rounded-md border"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={customerInfo.phone}
        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
        className="w-full mb-2 p-2 rounded-md border"

      />

      {/* Service Information */}


       {/* Model selection */}
       <select
          value={serviceInfo.modelName}
          onChange={handleModelChange}
          className="w-full mb-2 p-2 rounded-md border"
        >
         
          {Array.from(new Set(partsData.map((part) => part.modelName))).map((modelName) => (
          <option key={modelName} value={modelName}> {modelName} </option>))}
        </select>

        {/* Part selection */}
        <select
          value={serviceInfo.partName}
          onChange={(e) => setServiceInfo({ ...serviceInfo, partName: e.target.value })}
          className="w-full mb-2 p-2 rounded-md border"
        >
          <option value="">Select Part</option>
          {/* Populate options dynamically based on selected model */}
          {availableParts.map((part) => (
            <option key={part.part_id} value={part.part_name}>
              {part.part_name}
            </option>
          ))}
        </select>
 






      {/* <input
        type="text"
        placeholder="Enter the priority 0/1"
        value={serviceInfo.priority}
        onChange={(e) => setServiceInfo({ ...serviceInfo, serviceCentreId: e.target.value })}

        className="w-full mb-2 p-2 rounded-md border"
      /> */}

      <input
      type='text'
      placeholder='remarks'
      value={serviceInfo.remarks}
      onChange={(e)=>setServiceInfo({...serviceInfo,remarks:e.target.value})}
      className='w-full mb-2 p-2 rounded-md border'
      
      />

      <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md">
        Create Request
      </button>

     



     
    </form>
    {alert && (
        <div
          className="w-2/5 mx-4  flex justify-center  mt-4 p-1 bg-green-600 border border-green-300 "
        >
          Request created Successfully!
        </div>
      )}

    </>
  );
};

export default Form;
