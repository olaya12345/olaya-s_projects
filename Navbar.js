import React from 'react'

function Navbar() {
  return (
    <nav className="bg-blue-600 fixed top-0 left-0 w-full h-12 shadow-md z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-10 h-full">
        <a href="#" className="text-lg font-semibold text-white">
          My App
        </a>
        <ul className="flex space-x-8 m-2">
          <li>
            <a href="#" className="text-white hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;