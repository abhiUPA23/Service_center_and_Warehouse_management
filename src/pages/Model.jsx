import Header from '../components/Header';
import Chatmodel from '../components/Chatmodel';
import { Link }from 'react-router-dom';
import './Model.css';
export default function Model(){
    return(
        <>
        <Header/>
        <div className="main-container-main-model">
     <div className="model-cont1">
            <div className="menu-container">
          <div className="title">
           <h1>FashionGPT</h1>
          </div>
         <ul className="list-group">
           <li className="list-group-item"><Link to='/model'>Image Search</Link></li> 
          <li className="list-group-item"><Link to='/model'>Chat here</Link></li>
         </ul>
      </div>
     </div>

            <div className="model-cont2">
              <Chatmodel/>  
            </div>


      </div>
        </>
    )
}