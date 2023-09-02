import { useState } from "react"
import Login from "./Login"
import Services from "./Services"
import Header from "../components/Header"


export default function Servicecenter(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [response, setResponse] = useState(null);

    const handlelogin=(skUid)=>{
        setIsLoggedIn(true);
        setResponse(skUid);
    };

    return(
        <>
        <Header istrue='true'/>
        <div className="login-cont">
            {isLoggedIn ?(<Services response={response} />):(<Login onLogin={handlelogin}/>)}
        </div>
        </>
    )
}