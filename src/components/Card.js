import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import largeCover from '../images/large-cover.jpg'

export default function Card(props) {
  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/4 mt-6 px-4 md:px-6">
      <div className="card relative overflow-hidden">
        <img className="w-full border-4 border-white rounded-sm" src={largeCover} alt=""/>
        <div className="card__inner hidden md:block absolute inset-0 pt-12 text-center bg-gray-transparent-md border-4 border-green-500 rounded-sm">
          <FaStar className="text-green-500 h-6 w-6 inline-block" />
          <span className="text-2xl text-white font-semibold block">7.1 / 10</span>
          <ul className="mt-8">
            <li className="text-white text-3xl leading-tight font-semibold">Horror</li>
            <li className="text-white text-3xl leading-tight font-semibold">Mystery</li>
          </ul>
          <span className="bg-green-500 text-sm hover:bg-green-600 text-white py-2 px-4 rounded font-bold mt-8 inline-block">
            View Details
          </span>
        </div>
      </div>
      <h4 className="text-white text-sm md:text-lg font-bold leading-tight mt-3">
        <Link className="text-white hover:text-gray-500" to="browse-movies/1">Hotel Mumbai</Link>
      </h4>
      <span className="text-gray-500 text-xs md:text-sm">2018</span>
    </div>
  )
}
