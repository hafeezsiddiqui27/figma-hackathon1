import React from 'react'

const Aboutheader = () => {
  return (
      <div>
           <header className="bg-white py-6 shadow">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <nav className="space-x-6">
                            <a href="/" className="hover:text-blue-600">Home</a>
                            <a href="/about" className="hover:text-blue-600">About</a>    
            <a href="#" className="hover:text-blue-600">Product</a>
            <a href="#" className="hover:text-blue-600">Pricing</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="space-x-4 mr-10">
            <button className="text-blue-500">Login</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Become a member</button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Aboutheader