import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaList, FaSignInAlt, FaUser, FaAsterisk, FaMapPin } from 'react-icons/fa'

export default function QuickLinks() {
  return (
    <div className="border-t border-gray-700 pb-4 bg-gray-900 md:hidden">
      <div className="container">
        <ul className="flex flex-wrap list-reset">
          <li className="w-1/3 mt-4">
            <Link className="text-white block text-center" to="/">
              <FaHome className="h-6 w-6 mx-auto" />
              <span className="mt-1 inline-block">Home</span>
            </Link>
          </li>
          <li className="w-1/3 mt-4">
            <Link className="text-white block text-center" to="/">
              <FaList className="h-6 w-6 mx-auto" />
              <span className="mt-1 inline-block">Browse</span>
            </Link>
          </li>
          <li className="w-1/3 mt-4">
            <Link className="text-white block text-center" to="/">
              <FaSignInAlt className="h-6 w-6 mx-auto" />
              <span className="mt-1 inline-block">Login</span>
            </Link>
          </li>
          <li className="w-1/3 mt-4">
            <Link className="text-white block text-center" to="/">
              <FaUser className="h-6 w-6 mx-auto" />
              <span className="mt-1 inline-block">Register</span>
            </Link>
          </li>
          <li className="w-1/3 mt-4">
            <Link className="text-white block text-center" to="/">
              <FaAsterisk className="h-6 w-6 mx-auto" />
              <span className="mt-1 inline-block">Requests</span>
            </Link>
          </li>
          <li className="w-1/3 mt-4">
            <Link className="text-white block text-center" to="/">
              <FaMapPin className="h-6 w-6 mx-auto" />
              <span className="mt-1 inline-block">Suggestions</span>
            </Link>
          </li>
          </ul>
      </div>
    </div>
  )
}
