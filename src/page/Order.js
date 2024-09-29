import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Order = () => {
  const [data, setdata] = useState([])
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/cart')
      .then(function (response) {
        // handle success
        var value = 0;
        for (let num = 0; num < response.data.data.length; num++) {
          console.log(response.data.data[num].price);
          value += total + parseFloat(response.data.data[num].price);
        }

        console.log(value);

        console.log("response", response.data.data);
        setdata(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])

  const handleDelete = (item) => {
    // e.preventDefault()
    axios.delete(`http://localhost:5000/delcart/${item._id}`)
      .then(function (response) {
        // handle success
        console.log("delresponse", response.data.data);
        window.location.reload()
        // setdata(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  const handlePay = (item) => {
    item.forEach(element => {
      axios.post('http://localhost:5000/addpay', {
        kcal: element.kcal,
        price: element.price,
        tall: element.tall,
        title: element.title
      })
        .then(function (response) {
          // handle success
          // for (let num = 0; num < response.length; num++) {
          //   console.log(response[num]);
          // }
          console.log("response", response);
          // setdata(response.data.data)
          window.location.replace('http://localhost:3000/pay')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    });
  }
  return (
    <>
      <div className='flex flex-wrap p-5'>
        {
          data.map((item) => {
            return (
              <>
                <div className='w-full bg-white border-2 max-w-sm min-w-[280px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl'>
                  <div className='flex gap-4'>
                    <img src={item.img} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                    <div>
                      <h3 className='font-semibold'>{item.title}</h3>
                      <p className='text-xs text-gray-400'>TALL({item.tall} ML) .{item.kcal} kcal</p>
                      <p>₹ <span>{item.price}</span></p>
                    </div>
                  </div>
                  <div className='w-80 font-semibold mt-6'>
                    {/* <button className='text-white bg-green-800 hover:bg-[#1e3932] py-1 px-5 rounded-full' ><a href='pay'>Pay</a></button> */}
                    {/* <button className='text-white bg-red-800 hover:bg-[#1e3932] py-1 px-5 rounded-full' ><a href='ordering' onClick={()=>handleDelete(item)}>Remove</a></button> */}
                    <button className='text-white bg-red-800 hover:bg-[#1e3932] py-1 px-5 rounded-full w-80' onClick={() => handleDelete(item)}>Remove</button>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      <div className='p-5'> 
        <button className='text-white bg-green-800 hover:bg-[#1e3932] py-1 px-5 rounded-full' onClick={() => handlePay(data)}>Pay Now</button>
      </div>
    </>
  )
}

export default Order