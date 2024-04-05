"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'; // Import Link from Next.js
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to the signup API endpoint
      const response = await axios.post('https://massyve-six.vercel.app/api/v1/users', {
        name,
        email,
        password
      });

      console.log('Signup successful', response.data);
      router.push('/')

      // Redirect or perform any other actions after successful signup
    } catch (error) {
      console.error('Signup error', error.response.data);
      setError('Signup failed. Please try again.'); // Set error message
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Signup</h1>
          {error && <div className="error">{error}</div>} {/* Display error message if there is one */}
          <div className="form-group">
            <label>Name:</label>
            <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-primary" type="submit">Signup</button>
        </form>
      </div>
      <div className="register-link">
        <p>Already a memmber?<Link href="/">Login now</Link></p>
      </div>
    </div>
  );
};

export default SignupPage;
