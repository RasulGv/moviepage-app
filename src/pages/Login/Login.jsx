import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from '../../assests/logo.jpg';
import { login, signUp } from '../../components/firebase';
import spinner from '../../assests/netflix-spinner.gif';

function Login() {
  const [signState, setSignState] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (savedEmail && savedRememberMe) {
      setEmail(savedEmail);
    }

    if (savedPassword && savedRememberMe) {
      setPassword(savedPassword);
    }

    setRememberMe(savedRememberMe);
  }, []);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (signState === 'Sign In') {
        await login(email, password);
      } else {
        await signUp(name, email, password);
      }

      if (rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.setItem('rememberMe', 'false');
      }
    } catch (error) {
      console.error('Giriş xətası:', error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <div className="spinner">
      <img src={spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === 'Sign Up' ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your name"
            />
          ) : null}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button type="submit">{signState}</button>
          <div className="help">
            <div className="remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In' ? (
            <p>
              New to Netflix?{' '}
              <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={() => setSignState('Sign In')}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
