import React from 'react'
import { useState } from 'react'

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registered');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 text-center bg-white rounded-lg shadow-lg max-w-1/2">
        <h2 className='mb-4 text-2xl font-bold'>Register</h2>
        <input className='w-full m-1 border border-black rounded'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <input className='w-full m-1 border border-black rounded'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className='w-full m-1 border border-black rounded'
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700' onClick={handleRegister}>Register</button>
      </div>
    </div>

  );
};

export default Register