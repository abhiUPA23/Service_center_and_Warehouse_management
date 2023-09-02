import Warehousecard from "./Warehousecard";


const Waredetails = ({ requests }) => {
 
return (
  <>
  <div className="bg-gray-800 min-h-screen">
    
    {requests.map((req, index) => (
    <Warehousecard key={index} request={req} />   ))}
  </div>
  </>
);
};

export default Waredetails;
