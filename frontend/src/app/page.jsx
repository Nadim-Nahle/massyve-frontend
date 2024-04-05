"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null); // State to manage error or success message
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://massyve-six.vercel.app/api/v1/users/login', {
        email,
        password
      });
      router.push('/welcome')
      console.log('Login successful', response.data);
      // Set success message
      setMessage('Login successful!');
    } catch (error) {
      console.error('Login error', error.response.data);
      // Set error message
      setMessage('Invalid email or password');
    }
  };

  return (
    <div className="container">
      {/* Display error or success message */}
      {message && <div className={message.includes('success') ? 'success-message' : 'error'}>{message}</div>}

      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <p>New here? <Link href="/signup">Signup now</Link></p>
      </div>
    </div>
  );
};


export default LoginPage;
