import React, { useState } from 'react';
import './styles/login.css';
import axios from 'axios';
import image from './purple 1.png';
import logo from './logo.png';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { loginCheck, checkLevel, checkAccess } from 'pages/Helper/Auth';

const Login = () => {
  const [details, setDetails] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [cookie, setCookie] = useCookies(['auth-token']);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = details;
      const res = await axios.post(`${process.env.REACT_APP_NODE_URL}/hr/signin`, { email, password });
      const ans = await axios.get(`${process.env.REACT_APP_NODE_URL}/getuser`)

      if (ans.data && ans.data.authtoken) {
      // Handle successful login
        const user = await loginCheck(res.data.authtoken);
        const level = await checkLevel(user.level); 
        const access = await checkAccess(); 

        if (level === 'HR') {
        
          handleLoginSuccess(ans.data.authtoken, '/homehr');
        } else if (level === 'Manager') {
          
          handleLoginSuccess(ans.data.authtoken, '/homemv');
        } else if (level === 'Employee') {
          
          handleLoginSuccess(ans.data.authtoken, '/home');
        } 
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      // Handle login failure
      console.error('Login failed:', error);
      setError('Invalid email or password');
    }
  };

  const handleLoginSuccess = (authtoken) => {
    // Set cookie expiration time (example: 3 hours from now)
    const expirationTime = new Date(Date.now() + 3 * 60 * 60 * 1000);
    setCookie('auth-token', authtoken, { path: '/', expires: expirationTime });

    // Redirect to dashboard or any other page
    navigate('/homehr');
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    setError(null); // Clear error message on input change
  };

  return (
    <div className='login-page'>
      <img className='banner_image' src={image} alt='Banner' />
      <div className='bottom-part'>
        <div className='form_part'>
          <div className='div_logo'>
            <img className='logo' src={logo} alt='Logo' />
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
                required
              />
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
                required
              />
            </div>
            {error && <div className='error-message'>{error}</div>}
            <div className='forgotPassword'>
              <span> forgot password?</span>
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

export default Login;
