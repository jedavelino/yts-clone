import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-5 border-t border-gray-700">
      <div className="container">
        <div className="flex flex-wrap items-center max-w-3xl mx-auto justify-center">
          <span className="inline-block text-white">YTS © 2011 - 2019</span>
          <ul className="list-reset inline-flex flex-wrap items-center justify-center ml-2">
            <li>
              <Link className="text-gray-500 hover:text-white font-medium text-sm px-1" to="/">
                Blog
              </Link>
            </li>
            <li className="text-white px-1">-</li>
            <li>
              <Link className="text-gray-500 hover:text-white font-medium text-sm px-1" to="/">
                DMCA
              </Link>
            </li>
            <li className="text-white px-1">-</li>
            <li>
              <Link className="text-gray-500 hover:text-white font-medium text-sm px-1" to="/">
                API
              </Link>
            </li>
            <li className="text-white px-1">-</li>
            <li>
              <Link className="text-gray-500 hover:text-white font-medium text-sm px-1" to="/">
                RSS
              </Link>
            </li>
            <li className="text-white px-1">-</li>
            <li>
              <Link className="text-gray-500 hover:text-white font-medium text-sm px-1" to="/">
                Contact
              </Link>
            </li>
            <li className="text-white px-1">-</li>
            <li>
              <Link className="text-gray-500 hover:text-white font-medium text-sm px-1" to="/">
                Browse Movies
              </Link>
            </li>
            <li className="text-white px-1">-</li>
            <li>
              <Link className="text-gray-500 hover:text-white font-medium text-sm px-1" to="/">
                Requests
              </Link>
            </li>
            <li className="text-white px-1">-</li>
            <li>
              <Link className="text-gray-500 hover:text-white font-medium text-sm px-1" to="/">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap items-center max-w-3xl mx-auto justify-center pt-2">
          <ul className="list-reset flex items-center ml-2">
            <li>
              <Link className="text-gray-500 hover:text-white text-sm font-medium px-1" to="/">
                EZTV
              </Link>
            </li>
            <li className="text-white px-1">-</li>
            <li>
              <Link className="text-gray-500 hover:text-white text-sm font-medium px-1" to="/">
                YTS VPN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
