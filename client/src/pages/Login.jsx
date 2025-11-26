import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { navigate, token, setToken, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {

      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }

      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.token) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          navigate('/');
        } else {
          toast.error(response.data.message);
        }
      }

    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) navigate('/');
  }, [token]);

  return (
    <form 
      onSubmit={onSubmitHandler} 
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 
      text-gray-800 border-2 border-black 
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 bg-white '
    >
      <div className='inline-flex items-center gap-2 mb-4 mt-6'>
        <p className='prata-regular text-4xl font-black uppercase tracking-wider'>
          {currentState}
        </p>
        <div className='w-12 h-1 bg-linear-to-r from-red-600 to-orange-500'></div>
      </div>

      {/* Render Name input only if Sign Up */}
      {currentState !== 'Login' && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className='w-full px-4 py-3 border-2 border-black 
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-semibold 
          focus:border-red-600 focus:outline-none transition-colors'
          placeholder='Name'
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className='w-full px-4 py-3 border-2 border-black 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-semibold 
        focus:border-red-600 focus:outline-none transition-colors'
        placeholder='Email'
        required
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className='w-full px-4 py-3 border-2 border-black 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-semibold 
        focus:border-red-600 focus:outline-none transition-colors'
        placeholder='Password'
        required
      />

      <div className='w-full flex justify-between text-sm font-semibold'>
        <p className='cursor-pointer hover:text-red-600 transition-colors'>
          Forgot your password?
        </p>
        {currentState === 'Login' ? (
          <p 
            onClick={() => setCurrentState('Sign Up')} 
            className='cursor-pointer hover:text-red-600 transition-colors font-black'
          >
            Create account
          </p>
        ) : (
          <p 
            onClick={() => setCurrentState('Login')} 
            className='cursor-pointer hover:text-red-600 transition-colors font-black'
          >
            Login Here
          </p>
        )}
      </div>

      <button 
        className='bg-black text-white font-black uppercase tracking-wider 
        px-10 py-4 mt-4 border-2 border-black 
        shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] 
        hover:bg-red-600 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
        transition-all w-full'
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>

    </form>
  );
};

export default Login;
