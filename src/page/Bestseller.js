import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bs, drink, f, Merchandise, cah, rte } from '../database'
import veg from "../assests/img/veg.svg"
import axios from 'axios';


export const Bestseller = () => {
    const Navigate = useNavigate();
    const slideRef = useRef("")
    const slideImageRef = useRef(null)

    const cart = (el) => {
        axios.post('http://localhost:5000/addcart', {
            id: el.id,
            img: el.img,
            kcal: el.kcal,
            price: el.price,
            tall: el.tall,
            title: el.title
        })
            .then(function (response) {
                // handle success
                console.log(response);
                window.location.replace('http://localhost:3000/ordering')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    return (
        <>
            <div className="h-72 py-7">
                <div className='px-4 md:px-0  sm:px-0 md:w-4/5 m-auto relative'>
                    <h1 className='text-[#1e3932] text-2xl font-bold mb-4'>Bestseller</h1>
                    <div className='my-10'>

                        <div className='flex gap-2 md:gap-6 overflow-scroll w-full absolute top-16 sm:px-4 scrollbar-none' ref={slideRef}>
                            {
                                Bs.map((el) => {
                                    return (
                                        <div className='w-full bg-white border-2 max-w-sm min-w-[280px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl'>
                                            <div className='flex gap-4'>
                                                <img src={el.img} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                                                <div>
                                                    <img src={veg} className='' />
                                                    <h3 className='font-semibold'>{el.title}</h3>
                                                    <p className='text-xs text-gray-400'>TALL({el.tall} ML) .{el.kcal} kcal</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between font-semibold my-2'>
                                                <p>₹ <span>{el.price}</span></p>
                                                <button className='text-white bg-green-800 hover:bg-[#1e3932] py-1 px-5 rounded-full' onClick={() => cart(el)}>Add Item</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-72 py-7">
                <div className='px-4 md:px-0  sm:px-0 md:w-4/5 m-auto relative'>
                    <h1 className='text-[#1e3932] text-2xl font-bold mb-4'>Drink</h1>
                    <div className='my-10'>

                        <div className='flex gap-2 md:gap-6 overflow-scroll w-full absolute top-16 sm:px-4 scrollbar-none' ref={slideRef}>
                            {
                                drink.map((el) => {
                                    return (
                                        <div className='w-full bg-white border-2 max-w-sm min-w-[280px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl'>
                                            <div className='flex gap-4'>
                                                <img src={el.img} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                                                <div>
                                                    <img src={veg} className='' />
                                                    <h3 className='font-semibold'>{el.title}</h3>
                                                    <p className='text-xs text-gray-400'>TALL({el.tall} ML) .{el.kcal} kcal</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between font-semibold my-2'>
                                                <p>₹ <span>{el.price}</span></p>
                                                <button className='text-white bg-green-800 hover:bg-[#1e3932] py-1 px-5 rounded-full' onClick={() => cart(el)}>Add Item</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-72 py-7">
                <div className='px-4 md:px-0  sm:px-0 md:w-4/5 m-auto relative'>
                    <h1 className='text-[#1e3932] text-2xl font-bold mb-4'>Food</h1>
                    <div className='my-10'>

                        <div className='flex gap-2 md:gap-6 overflow-scroll w-full absolute top-16 sm:px-4 scrollbar-none' ref={slideRef}>
                            {
                                f.map((el) => {
                                    return (
                                        <div className='w-full bg-white border-2 max-w-sm min-w-[280px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl'>
                                            <div className='flex gap-4'>
                                                <img src={el.img} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                                                <div>
                                                    <img src={veg} className='' />
                                                    <h3 className='font-semibold'>{el.title}</h3>
                                                    <p className='text-xs text-gray-400'>TALL({el.tall} ML) .{el.kcal} kcal</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between font-semibold my-2'>
                                                <p>₹ <span>{el.price}</span></p>
                                                <button className='text-white bg-green-800 hover:bg-[#1e3932] py-1 px-5 rounded-full' onClick={() => cart(el)}>Add Item</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-72 py-7">
                <div className='px-4 md:px-0  sm:px-0 md:w-4/5 m-auto relative'>
                    <h1 className='text-[#1e3932] text-2xl font-bold mb-4'>Merchandise</h1>
                    <div className='my-10'>

                        <div className='flex gap-2 md:gap-6 overflow-scroll w-full absolute top-16 sm:px-4 scrollbar-none' ref={slideRef}>
                            {
                                Merchandise.map((el) => {
                                    return (
                                        <div className='w-full bg-white border-2 max-w-sm min-w-[280px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl'>
                                            <div className='flex gap-4'>
                                                <img src={el.img} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                                                <div>
                                                    <img src={veg} className='' />
                                                    <h3 className='font-semibold'>{el.title}</h3>
                                                    <p className='text-xs text-gray-400'>{el.p}</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between font-semibold my-2'>
                                                <p>₹ <span>{el.price}</span></p>
                                                <button className='text-white bg-green-800 hover:bg-[#1e3932] py-1 px-5 rounded-full' onClick={() => cart(el)}>Add Item</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-72 py-7">
                <div className='px-4 md:px-0  sm:px-0 md:w-4/5 m-auto relative'>
                    <h1 className='text-[#1e3932] text-2xl font-bold mb-4'>Coffee At Home</h1>
                    <div className='my-10'>

                        <div className='flex gap-2 md:gap-6 overflow-scroll w-full absolute top-16 sm:px-4 scrollbar-none' ref={slideRef}>
                            {
                                cah.map((el) => {
                                    return (
                                        <div className='w-full bg-white border-2 max-w-sm min-w-[280px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl'>
                                            <div className='flex gap-4'>
                                                <img src={el.img} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                                                <div>
                                                    <img src={veg} className='' />
                                                    <h3 className='font-semibold'>{el.title}</h3>
                                                    <p className='text-xs text-gray-400'>{el.p} kcal</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between font-semibold my-2'>
                                                <p>₹ <span>{el.price}</span></p>
                                                <button className='text-white bg-green-800 hover:bg-[#1e3932] py-1 px-5 rounded-full' onClick={() => cart(el)}>Add Item</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-72 py-7">
                <div className='px-4 md:px-0  sm:px-0 md:w-4/5 m-auto relative'>
                    <h1 className='text-[#1e3932] text-2xl font-bold mb-4'>Ready to eat</h1>
                    <div className='my-10'>

                        <div className='flex gap-2 md:gap-6 overflow-scroll w-full absolute top-16 sm:px-4 scrollbar-none' ref={slideRef}>
                            {
                                rte.map((el) => {
                                    return (
                                        <div className='w-full bg-white border-2 max-w-sm min-w-[280px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl'>
                                            <div className='flex gap-4'>
                                                <img src={el.img} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                                                <div>
                                                    <img src={veg} className='' />
                                                    <h3 className='font-semibold'>{el.title}</h3>
                                                    <p className='text-xs text-gray-400'>{el.p}</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between font-semibold my-2'>
                                                <p>₹ <span>{el.price}</span></p>
                                                <button className='text-white bg-green-800 hover:bg-[#1e3932] py-1 px-5 rounded-full' onClick={() => cart(el)}>Add Item</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Bestseller;
