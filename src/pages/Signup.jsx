import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [rememberLogin, setRememberLogin] =useState(false)
  const [email, setEmail] = useState('')
  const  [password,setPssword] = useState('')

  const { user, signUp } =UserAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signUp(email, password)
      navigate('/')
    }catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img 
          className='hidden sm:block absolute w-full h-full object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
          alt="Netflix Background" 
        />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>

        <div className='fixed w-full px-4 py-24 z-20'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold text-white'>Sign Up</h1>

              <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'>
                <input 
                  className='p-3 my-2 bg-gray-700 rounded text-white'
                  type='email' 
                  placeholder='Email' 
                  autoComplete='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                  className='p-3 my-2 bg-gray-700 rounded text-white'
                  type='password' 
                  placeholder='Password' 
                  autoComplete='current-password' 
                  value={password}
                  onChange={(e) => setPssword(e.target.value)}
                />

                <button className='bg-red-600 py-3 my-6 rounded font-bold text-white'>
                  Sign Up
                </button>
                
                <div className='flex justify-between items-center text-gray-600'>
                  <p>
                    <input type='checkbox' className='mr-2' checked ={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)}/>
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='my-4'>
                  <span className='text-gray-600 mr-2'>
                    Already subscribed to Netflix?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
