// app/success/page.tsx

'use client'

import React from 'react'

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-white flex items-center justify-center">
      <div className="max-w-lg shadow-black rounded-lg shadow-xl p-10 text-center">
        <div className="flex justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Success!</h1>
        <p className="text-xl text-gray-600 mb-8">Your order has been successfully placed. We&apos;ll send a confirmation email shortly.</p>
        
        <div className="bg-[#f3f4f6] rounded-md py-4 px-6 mb-6">

          <p className="text-sm text-gray-700">Estimated Delivery: <span className="font-semibold text-[#4e73df]">3-5 Business Days</span></p>
        </div>

        <div className="space-x-4">
          <a
            href="/listing"
            className="inline-block py-3 px-8 bg-gradient-to-r bg-green-500 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:opacity-90"
          >
            Continue Shopping
          </a>
          <a
            href="/account/orders"
            className="inline-block py-3 px-8 bg-transparent border-2 border-[#4e73df] text-[#4e73df] rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[#4e73df] hover:text-white"
          >
            View Orders
          </a>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
