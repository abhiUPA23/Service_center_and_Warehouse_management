import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
// import Model from './pages/Model';
import Nopage from './pages/Nopage';
import './App.css';
import Chat from './pages/Chat';
// import Services from './pages/Services';
import Warehouse from './pages/Warehouse';
import Servicecenter from './pages/Servicecenter';
import Services from './pages/Services';
import Planning from './pages/Planning';
function App() {
  
  return (
    <div >
      <BrowserRouter>
          <Routes>
             <Route index element={<Home/>}></Route>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/home' element={<Home/>}></Route>
             {/* <Route path='/model' element={<Model/>}></Route> */}
             <Route path='/chat' element={<Chat/>}></Route>
             <Route path='/servicecenter' element={<Servicecenter/>}></Route>
             <Route path='/services' element={<Services/>}></Route>
             <Route path='/warehouse' element={<Warehouse/>}></Route>
             <Route path='/planning' element={<Planning/>}></Route>
             <Route path='/chat' element={<Chat/>}></Route>
             <Route path='*' element={Nopage}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
