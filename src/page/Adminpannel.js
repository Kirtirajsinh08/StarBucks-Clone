import React from 'react'

const Adminpannel = () => {
  return (
    <>
      <>
        <div class="min-h-full p-4 ">
          <nav class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                  </div>
                  <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                      <a href="dcart" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Cart</a>
                      <a href="payment" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Payment</a>
                      {/* <a href="psuccessfull" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Paymentsuccessfull</a> */}
                      <a href="introdution" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Offer</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <header class="bg-white shadow">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            </div>
          </main>
        </div>
      </>
    </>
  )
}

export default Adminpannel