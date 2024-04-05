"use client";
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://massyve-six.vercel.app/api/v1/users/login', {
        email,
        password
      });

      console.log('Login successful', response.data);
      // Redirect or perform any other actions after successful login
    } catch (error) {
      console.error('Login error', error.response.data);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label>Email:</label>
          <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
      <div className="register-link">
        <p>New here? <Link href="/register">Register now</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;