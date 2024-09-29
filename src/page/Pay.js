import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
const Pay = () => {
  const [cartdata, setCartdata] = useState([])
  const [data, setData] = useState([])
  const [price, setPrice] = useState(0)
  const [total, setTotal] = useState(0)
  const [title, settitle] = useState("")
  const [tall, settall] = useState(0)
  const [kcal, setkcal] = useState(0)
  const [cancelData, setCancelData] = useState([])
  
  useEffect(() => {
    // axios.get()
    axios.get('http://localhost:5000/viewpay')
      .then(function (response) {
        // handle success
        console.log("responseweee", response.data.data);
        setData(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])



  useEffect(() => {
    axios.get('http://localhost:5000/cart')
      .then(function (response) {
        // handle success
        console.log(response.data.data[0]);
        setCartdata(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])

  useEffect(() => {
    axios.get('http://localhost:5000/cart')
      .then(function (response) {
        // handle success
        var value = 0;
        for (let num = 0; num < response.data.data.length; num++) {
          console.log(response.data.data[num].price);
          value += parseFloat(response.data.data[num].price);
        }
        console.log(value);
        setPrice(value)
        console.log("response", response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  useEffect(() => {
    axios.get('http://localhost:5000/cart')
      .then(function (response) {
        var arr = [];
        for (let num = 0; num < response.data.data.length; num++) {
          console.log(response.data.data[num]._id);
          arr.push(response.data.data[num]._id);
        }
        setCancelData(arr)
        console.log("response", response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  function updateBtn() {
    window.location.replace("http://localhost:3000");
  }

  const payment = (item) => {

    axios.post('http://localhost:5000/confirmpay', {
      kcal: kcal,
      price: price,
      tall: tall,
      title: title
    })
      .then(function (response) {

        console.log("response", response.data.data);

        axios.get('http://localhost:5000/delete_cart')
          .then(function (response) {
            alert("Payment successfull")
            window.location.replace('http://localhost:3000/')
          })
          .catch(function (error) {
            console.log(error);
          })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  function DeleteProduct(id) {
    axios.delete(`http://localhost:5000/delcart/${id}`)
      .then(function (response) {
        alert("Product Deleted Successfully .. !");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <>
      <div className='p-5'>
        <div className='w-90 mx-auto   bg-white border-2 max-w-sm min-w-[280px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl '>
          {
            cartdata.map((data, i) => {
              return (
                <>
                  <div className='flex gap-4 justify-between'>
                    {/* <img src={img} className='w-20 bg-red-500 h-20 rounded-md object-cover' /> */}
                    <div className='w-100 '>
                      <div className='border border-1 w-full rounded-lg my-2'>
                        <h3 className='font-semibold px-4'>{data.title}</h3>
                        <p className='text-xs text-gray-400 px-4'>TALL({data.tall} ML).{data.kcal} kcal</p>
                        <p> <span className='px-4'>₹{data.price}</span></p>
                      </div>
                    </div>
                    <div>
                      <button id={data._id} className='text-white bg-blue-600 hover:bg-[#1e3932] py-1 px-5 rounded-full w-50' onClick={() => { DeleteProduct(data._id) }}>Delete</button>
                    </div>
                  </div>
                </>
              )
            })
          }

          <header class="bg-white shadow mt-4">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 class="text-3xl font-bold tracking-tight text-gray-900">Detail</h1>
              <form>
                <div class="space-y-12">
                  <div class="border-b border-gray-900/10 pb-12">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div class="mt-2">
                          <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>


                      <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                          <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>

                      <div class="sm:col-span-2 sm:col-start-1">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                        <div class="mt-2">
                          <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>

                      <div class="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State</label>
                        <div class="mt-2">
                          <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>

                      <div class="sm:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP</label>
                        <div class="mt-2">
                          <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="mt-6 flex items-center justify-end gap-x-6">
                          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                          <button type="submit" onClick={handleSubmit} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                        </div> */}
              </form>

            </div>
          </header>
          <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            </div>
          </main>


          <div className='w-80 font-semibold mt-6'>
            <button className='text-white bg-red-800 hover:bg-[#1e3932] py-1 px-5 rounded-full w-50' onClick={() => payment(data)}>Payment</button>
            <button className='text-white bg-red-400 hover:bg-[#1e3932] py-1 px-5 rounded-full w-50' onClick={updateBtn}>Update</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pay