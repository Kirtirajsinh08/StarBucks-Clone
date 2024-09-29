import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'

const Payment = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/viewpay')
            .then(function (response) {
                console.log(response.data.data)
                setData(response.data.data)
            })
            .catch(function (err) {
                console.log(err);
            })
    }, [])
    return (
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
                        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Payment</h1>
                        <table class="tablepay">
                            <thead>
                                <tr>
                                    <th scope="col" >Title</th>
                                    <th scope="col" >Kcal</th>
                                    <th scope="col" >Tall</th>
                                    <th scope="col" >Price</th>
                                </tr>
                                {
                                    data.map((item) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{item.title}</td>
                                                    <td>{item.kcal}</td>
                                                    <td>{item.tall}</td>
                                                    <td>{item.price}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </thead>
                        </table>

                    </div>
                </header>
                <main>
                    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    </div>
                </main>
            </>
        </>
    )
}

export default Payment