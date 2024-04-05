"use client";
import React, { useState } from 'react'
import { useEffect } from "react";

function WelcomePage() {
  const [userData, setUserData] = useState('');
  useEffect(() => {
    // Perform localStorage action
    const data = JSON.parse(localStorage.getItem('userData'));
    setUserData(data);
    console.log('test',userData)
  }, [])
  return (
    <div className="container-1">
      <div className="heading">Welcome Page</div>
      <div className="user-info">
        <div>
          <label>Name:</label> {userData.name}
        </div>
        <div>
          <label>Email:</label> {userData.email}
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;