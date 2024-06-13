import React, { useState } from 'react';
import './styles/login.css';
import axios from 'axios';
import image from './purple(e).png';
import logo from './logo.png';
import { useCookies } from 'react-cookie';
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import { loginCheck } from '../Helper/Auth';
import useAuth from '../Helper/useAuth';

const EmpLogin = () => {
  const [details, setDetails] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [cookie, setCookie] = useCookies(['accessToken']);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = details;
      const res = await axios.post(`${process.env.REACT_APP_NODE_URL}/api/signin`, { email, password });

      // Handle successful login
      handleLoginSuccess(res.data.authtoken);
    } catch (error) {
      // Handle login failure
      console.error('Login failed:', error);
    }
  };

  const handleLoginSuccess = (authtoken) => {
    // Set cookie expiration time (example: 3 hours from now)
    const expirationTime = new Date(Date.now() + 3 * 60 * 60 * 1000);
    setCookie('auth-token', authtoken, { path: '/', expires: expirationTime });

    // Redirect to dashboard or any other page
    navigate('/home');
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    
      <div className='login-page'>
        <img className='banner_image' src={image} alt='Banner'></img>
        <div className='bottom-part'>
          <div className='form_part'>
            <div className='div_logo'>
              <img className='logo' src={logo} alt='Logo'></img>
            </div>
            <h2 className='LogInLabelSize'>LOG IN</h2>
            <form onSubmit={handleSubmit}>
              <div className='username'>
                <label>Email</label>
                <input
                  id='email-input'
                  type='email'
                  className='username-input'
                  placeholder='Email'
                  autoComplete='off'
                  name='email'
                  onChange={handleChange}
                ></input>
              </div>
              <div className='username'>
                <label>Password</label>
                <input
                  id='password-input'
                  type='password'
                  className='username-input'
                  placeholder='Password'
                  name='password'
                  onChange={handleChange}
                ></input>
              </div>
              {error && <div className='error-message'>{error}</div>}
              <div className='forgotPassword'>
                <span>forgot password?</span>
              </div>
              <div>
                <button id='login-button' className='login btn btn-primary' type='submit'>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default EmpLogin;
