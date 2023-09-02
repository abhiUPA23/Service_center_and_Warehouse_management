
import React from "react";
import { Link }from 'react-router-dom';
import './componentscss/Header.css'
import logo from '../assets/mi-logo.jpeg';




export default function Header(props) {

    const handleLogOut=()=>{

       window.location.href='./home';

    }


    return ( 

        <nav className="navbar">

            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            

            <div className="navbar-menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    {/* <li><Link to='/home'>Planning</Link></li> */}
                    <li><Link to='/servicecenter'>Service Center</Link></li>
                    <li><Link to='/warehouse'>Warehouse</Link></li>
                    <li><Link to='/chat'>Chat & Inquire</Link></li>
                </ul>
            </div>
           
            { props.istrue==='true'? <button className='btn text-red-600 rounded-md left-0' onClick={handleLogOut}>Log out</button>:[]}
                    
        </nav>
    );
}
