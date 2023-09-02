
const Planningcards = ({ request }) => {

    return (
      <div className="main-card p-4 bg-gray-100">
  
        <h2 className="text-xl font-bold mb-4">Pending Request</h2>
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
          <p>Part ID: {request.partId}</p>
          <p>Service Centre ID: {request.serviceCenterSkUid}</p>
          {/* int expectedPartTime;
          int expectedTransportTime;
          int expectedPrice; */}
        </div>
        {/* Additional fields like time to repair and cost to repair can be added here */}
      </div>
    );
  };
  
  export default Planningcards;
  