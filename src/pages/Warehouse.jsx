import { useState } from "react"
import Waredetails from "../components/Waredetails";
import Loginwarehouse from "./Loginwarehouse";
import Header from "../components/Header";


export default function Warehouse(){
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [response, setResponse] = useState(null);
   const   handlelogin=(userResponse)=>{
        setisLoggedIn(true);
        setResponse(userResponse);
    }
    return(
        <>
        <Header istrue='true'/>
          <div className="cont1" >
            {isLoggedIn ?(<Waredetails requests={response} />): (<Loginwarehouse onLogin={handlelogin}/>)}
          </div>
        </>
    )
}
