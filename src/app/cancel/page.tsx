
import React from 'react'
import { CircleX } from 'lucide-react'

const CancelPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-10">
      {/* Centering content with padding for smaller screens, and more padding for larger screens */}

      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center">
        {/* Main card with padding, shadow, and rounded corners */}

        <div className="text-center mb-6 ">
          {/* Icon Section */}
          <CircleX color="#e10e0e" size={100} />
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Oops! Something Went Wrong.
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-8">
          We're sorry, but your order has been canceled. Please try again or contact us if you have any questions.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-8 w-full">
          {/* Buttons are now aligned properly */}
          <a
            href="/listing"
            className="inline-block py-4 px-5 bg-blue-600 text-white rounded-full text-md font-semibold hover:bg-blue-500 transition duration-300 w-full md:w-auto text-center"
          >
            Continue Shopping
          </a>
          <a
            href="/contact"
            className="inline-block py-3 px-10 bg-transparent border-2 border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300 w-full md:w-auto text-center"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default CancelPage
