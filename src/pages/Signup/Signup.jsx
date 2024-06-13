import React, { useState } from 'react';
import './styles/Signup.css';
import axios from 'axios';
import image from './purple 1.png';
import logo from './logo.png';
import { useCookies } from 'react-cookie';
import { decodeToken } from 'react-jwt';
import { useNavigate,useParams } from 'react-router-dom';
// import { SignupCheck } from '../Helper/Auth';
import useAuth from '../Helper/useAuth';



export default function Signup () {
  console.log('Token Payload:');
  const { token } = useParams();
  const [details, setDetails] = useState({ username: '', email: '', password: '' });
  const [cookie, setCookie] = useCookies(['accessToken']);
  const { setUser, setLogged } = useAuth();
  const navigate = useNavigate();

  const highlightIncorrectInput = () => {
    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input');

    if (usernameInput) {
      usernameInput.classList.add('wrong-input-animation');
    }

    if (passwordInput) {
      passwordInput.classList.add('wrong-input-animation');
    }
  };

  const resetInputStyles = () => {
    document.getElementById('username-input').classList.remove('wrong-input-animation');
    document.getElementById('password-input').classList.remove('wrong-input-animation');
  };

  const showWarningMessage = () => {
    const warningMessageElement = document.getElementById('warning_message');

    if (warningMessageElement) {
      warningMessageElement.style.display = 'block';
    }
  };

  const hideWarningMessage = () => {
    const warningMessageElement = document.getElementById('warning_message');

    if (warningMessageElement) {
      warningMessageElement.style.display = 'none';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_NODE_URL}/api/signup/${token}`, {
        username: details.username,
        email: details.email,
        password: details.password,
      });

      if (res.data && res.data.data && res.data.data.accessToken) {
        const { payload } = decodeToken(res.data.data.accessToken);
        console.log('Token Payload:', payload);

        setCookie('accessToken', res.data.data.accessToken, { path: '/', expires: new Date(payload.exp * 1000) });

        // Redirect to login page only on successful signup
        navigate('/');
      }
    } catch (error) {
      console.error('Signup Error:', error);
      // Handle signup failure
      highlightIncorrectInput();
      showWarningMessage();
    }
  };

  const handleChange = (e) => {
    resetInputStyles();
    hideWarningMessage();

    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='Signup-page'>
        <img className='banner_image' src={image} alt='Banner'></img>
        <div className='bottom-part'>
          <div className='form_part'>
            <div className='div_logo'>
              <img className='logo' src={logo} alt='Logo'></img>
            </div>
            <h2 className='SignupLabelSize'>SIGN UP</h2>
            <form onSubmit={handleSubmit}>
              <div className='username'>
                <label>Username</label>
                <input
                  id='username-input'
                  type='text'
                  className='username-input'
                  placeholder='Username'
                  autoComplete='off'
                  name='username'
                  onChange={handleChange}
                ></input>
              </div>
              <div className='username'>
                <label className='email-label'>Email</label>
                <input
                  id='password-input'
                  type='email'
                  className='username-input'
                  placeholder='Email'
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
              <div className='username'>
                <label className='password-label'>Confirm Password</label>
                <input
                  id='password-input'
                  type='password'
                  className='username-input'
                  placeholder='password'
                  name='password'
                  onChange={handleChange}
                ></input>
              </div>
              <div className='term-conditions'>
                    <input type="checkbox" name="" id="" />
                    <span>I agree all Terms & conditions</span>
                </div>

              <div>
                
                <button id='Signup-button' className='Signup btn btn-primary'>
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


