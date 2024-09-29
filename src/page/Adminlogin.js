import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Admin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/adminlogin', {
            username: email,
            password: password
        })
            .then(function (response) {
                // handle success
                console.log(response.data.status);
                alert(response.data.status)
                if (response.data.status == "login Successful") {
                    console.log(response.data.status);
                    window.location.replace('http://localhost:3000/adminpannel')
                } else {
                    window.location.replace('http://localhost:3000/adminlogin')
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
                <h2 class="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Admin Login</h2>
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

                    <div class="pb-8">
                        <button type="submit" onClick={handleSubmit} class="flex  w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Admin