"use client";
import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted');
  };

  return (
    <div className="container">
      <div className="form-container">
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
      </div>
      <div className="register-link">
        <p>New here? <Link href="/signup">Signup now</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
