import React, { Component } from 'react'
import { FaAngleDown } from 'react-icons/fa'

export default class SearchFilters extends Component {
  render() {
    return (
      <form className="bg-gray-900 border-t border-gray-700 px-4 py-3 md:hidden">
        <div className="flex bg-gray-700 rounded">
          <input type="search" className="appearance-none block w-full bg-gray-700 text-white rounded py-2 px-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500 text-sm" placeholder="Search for a movie" />
          <button type="submit" className="bg-green-500 text-sm hover:bg-blue-700 text-white py-2 px-4 rounded">
            Search
          </button>
        </div>
        <div className="flex flex-wrap mt-3 -mx-2">
          <div className="w-1/2 px-2">
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
          <div className="w-1/2 px-2">
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
          <div className="w-1/2 px-2 mt-4">
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
          <div className="w-1/2 px-2 mt-4">
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
      </form>
    )
  }
}
