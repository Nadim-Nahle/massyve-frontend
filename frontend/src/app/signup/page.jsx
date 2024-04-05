"use client";
import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Signup logic here
    console.log('Signup form submitted');
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Signup</h1>
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
        <p>Already a member? <Link href="/signup">Login now</Link></p>
      </div>
    </div>
  );
};

export default SignupPage;
