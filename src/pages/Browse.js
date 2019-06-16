import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import QuickLinks from '../components/QuickLinks'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import MovieList from '../components/MovieList';

export default function Browse() {
  return (
    <div>
      <div className="bg-gray-1000 py-4 md:py-12 hidden md:block">
        <div className="container">
          <form className="flex justify-center">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2">
                <input type="search" className="appearance-none block w-full bg-gray-700 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500 text-sm" placeholder="Search for a movie" />
              </div>
              <div className="w-1/4 mt-2 px-2">
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="quality">
                  Quality
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-700 text-gray-500 py-2 px-4 pr-8 rounded leading-normal focus:outline-none focus:bg-gray-800 focus:border-gray-800 text-sm" id="quality">
                    <option>All</option> 
                    <option>Missouri</option> 
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <FaAngleDown />
                  </div>
                </div>
              </div>
              <div className="w-1/4 mt-2 px-2">
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="rating">
                  Rating
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-700 text-gray-500 py-2 px-4 pr-8 rounded leading-normal focus:outline-none focus:bg-gray-800 focus:border-gray-800 text-sm" id="rating">
                    <option>All</option> 
                    <option>Missouri</option> 
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <FaAngleDown />
                  </div>
                </div>
              </div>
              <div className="w-1/4 mt-2 px-2">
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="genre">
                  Genre
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-700 text-gray-500 py-2 px-4 pr-8 rounded leading-normal focus:outline-none focus:bg-gray-800 focus:border-gray-800 text-sm" id="genre">
                    <option>All</option> 
                    <option>Missouri</option> 
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <FaAngleDown />
                  </div>
                </div>
              </div>
              <div className="w-1/4 mt-2 px-2">
              <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="order">
                Order By
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-700 text-gray-500 py-2 px-4 pr-8 rounded leading-normal focus:outline-none focus:bg-gray-800 focus:border-gray-800 text-sm" id="order">
                  <option>Latest</option> 
                  <option>Missouri</option> 
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <FaAngleDown />
                </div>
              </div>
            </div>
            </div>
            <div>
              <button type="submit" className="ml-6 bg-green-500 font-bold hover:bg-blue-700 text-white py-2 px-6 rounded">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="py-4 md:py-12 bg-gray-900">
        <div className="container">
          <h2 className="text-2xl text-green-500 font-medium text-center">12,112 YIFY Movies Found</h2>
          <div className="mt-6">
            <Pagination />
          </div>
          <div className="flex flex-wrap -mx-4 md:-mx-6">
            <Card />
          </div>
          <div className="mt-6">
            <Pagination />
          </div>
        </div>
      </div>

      <QuickLinks />
    </div>
  )
}
