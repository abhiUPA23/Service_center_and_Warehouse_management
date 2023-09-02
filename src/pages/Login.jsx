import React, { useState } from 'react';
import { signupService } from '../services/user-service';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you might want to perform actual authentication with a backend.
    // For this example, we'll simulate a successful login.
    let isAuthenticated=null; // Replace with your authentication logic

    const data = {
      email: email, 
      password: password
    }
    let skUid=null;
    signupService(data).then((response)=>{
      console.log(response);
      console.log("success");
      if(response==null){
        isAuthenticated=false;
      }
      else{
        isAuthenticated=true;
        skUid=response;
      }
      if(isAuthenticated){
        console.log("skuid: "+skUid);
        onLogin(skUid);
      }
    });

    

  };

  return (
    <div className="w-1/2 mx-auto mt-20 bg-slate-200 p-6 rounded-md shadow-xl hover:shadow-slate-400">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">Login Service Center</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='w-3/5'>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder='Enter Service center email id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className='w-3/5'>
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder='password is password'
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
