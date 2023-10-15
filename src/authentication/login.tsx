import React from 'react'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
// Services
import { getUserService } from '../services/userService';

// 3rd Party
import Swal from 'sweetalert2';


const Login: React.FC = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {

    e.preventDefault();

    // if (username === '' || password === '') {
    //   Swal.fire('Invalid', 'Missing Fields!', 'warning')
    //   return;
    // }

    const allUsers = await getUserService();
    const userExist = allUsers.find((data: any) => data.username === username);

    // Guard Clauses
    if (!userExist) {
      Swal.fire('Invalid', 'User does not exist', 'warning')
      return;
    };

    if (password !== userExist.password) {
      Swal.fire('Invalid', 'Wrong username or password!', 'warning')
      return;
    }

    Swal.fire('Success', 'Logging in!', 'success')
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 text-center bg-white rounded-lg shadow-lg max-w-1/2">

        <form onSubmit={handleLogin}>
          <h2 className='mb-4 text-2xl font-bold'>Login</h2>
          <input className='w-full m-1 border border-black rounded'
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            required
          />
          <input className='w-full m-1 border border-black rounded'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700' type='submit'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login