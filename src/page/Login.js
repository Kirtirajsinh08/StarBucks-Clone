import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {
      username: email,
      password: password
    })
      .then(function (response) {
        // handle success
        if(response.data.status=="login Successful"){
          console.log(response.data.status);
          window.location.replace('http://localhost:3000/')
        } else {
          window.location.replace('http://localhost:3000/login')
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }
  return (
    <div  >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" />
        <h2 class="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
        <form class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" onClick={handleSubmit} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <p class="mt-10 pb-6 text-center text-sm text-gray-500">  
          Not a member?
          <a href="Registration" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Registration</a>
          Admin Login?
          <a href="adminlogin" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</a>
        </p>
      </div>
    </div>
  )
}

export default Login
