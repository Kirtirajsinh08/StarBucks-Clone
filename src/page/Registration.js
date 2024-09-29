import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        axios.post('http://localhost:5000/adduser', {
            name: name,
            email: email,
            contact: contact,
            password: password
        })
        .then(function (response) {
            // handle success
            
            console.log(response.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    }
    return (
        <>
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" />
                    <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Registration</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div class="mt-2">
                                <input id="name" value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" autocomplete="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div class="mt-2">
                                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" autocomplete="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label for="contact" class="block text-sm font-medium leading-6 text-gray-900">contact</label>
                            <div class="mt-2">
                                <input id="contact" value={contact} onChange={(e) => setContact(e.target.value)} name="contact" type="text" autocomplete="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                            </div>
                            <div class="mt-2">
                                <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="text" autocomplete="current-password"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" onClick={handleSubmit}  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registration</button>
                            {/* <input type="submit"  */}
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Registration