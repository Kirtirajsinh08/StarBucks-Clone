import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Offer = () => {
    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [zip, setzip] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/addintro', {
            name: name,
            email: email,
            // streetaddress: streetaddress,
            city: city,
            state: state,
            zip: zip,

        })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                window.location.replace('http://localhost:3000/')
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    return (
        <>
            <>
                <>
                    <div class="min-h-full p-4 ">
                        <nav class="bg-gray-800">
                            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div class="flex h-16 items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="hidden md:block">
                                            <div class="ml-10 flex items-baseline space-x-4">
                                                <a href="adminpannel" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav >
                    </div>
                    <header class="bg-white shadow">
                        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Offer</h1>
                            <form>
                                <div class="space-y-12">
                                    <div class="border-b border-gray-900/10 pb-12">
                                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-3">
                                                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                                <div class="mt-2">
                                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>


                                            <div class="sm:col-span-4">
                                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">BranchName</label>
                                                <div class="mt-2">
                                                    <input id="email" value={email} onChange={(e) => setemail(e.target.value)} name="email" type="text" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>

                                            {/* <div class="sm:col-span-3">
                                                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                                <div class="mt-2">
                                                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>
                                            </div> */}
                                            {/* 
                                            <div class="col-span-full">
                                                <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                                <div class="mt-2">
                                                    <input type="text" value={streetaddress} onChange={(e) => streetaddress(e.target.value)} name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div> */}

                                            <div class="sm:col-span-2 sm:col-start-1">
                                                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                                                <div class="mt-2">
                                                    <input type="text" value={city} onChange={(e) => setcity(e.target.value)} name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                                <div class="mt-2">
                                                    <input type="text" value={state} onChange={(e) => setstate(e.target.value)} name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                                <div class="mt-2">
                                                    <input type="text" value={zip} onChange={(e) => setzip(e.target.value)} name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-6 flex items-center justify-end gap-x-6">
                                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                                    <button type="submit" onClick={handleSubmit} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                                </div>
                            </form>

                        </div>
                    </header>
                    <main>
                        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        </div>
                    </main>
                </>
            </>
        </>
    )
}

export default Offer