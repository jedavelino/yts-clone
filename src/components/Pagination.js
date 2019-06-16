import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    return (
      <ul className="list-reset flex items-center justify-center">
        <li>
          <a className="text-white text-sm font-semibold inline-block py-2 px-3 border border-gray-700 rounded focus:bg-green-500 hover:bg-green-500 hover:border-green-500 focus:border-green-500" href="#">Previous</a>
        </li>
        <li className="ml-2">
          <a className="text-white text-sm font-semibold inline-block py-2 px-3 border border-gray-700 rounded focus:bg-green-500 hover:bg-green-500 hover:border-green-500 focus:border-green-500" href="#">1</a>
        </li>
        <li className="ml-2">
          <a className="text-white text-sm font-semibold inline-block py-2 px-3 border border-gray-700 rounded focus:bg-green-500 hover:bg-green-500 hover:border-green-500 focus:border-green-500" href="#">2</a>
        </li>
        <li className="ml-2">
          <a className="text-white text-sm font-semibold inline-block py-2 px-3 border border-gray-700 rounded focus:bg-green-500 hover:bg-green-500 hover:border-green-500 focus:border-green-500" href="#">3</a>
        </li>
        <li className="ml-2">
          <a className="text-white text-sm font-semibold inline-block py-2 px-3 border border-gray-700 rounded focus:bg-green-500 hover:bg-green-500 hover:border-green-500 focus:border-green-500" href="#">4</a>
        </li>
        <li className="ml-2">
          <a className="text-white text-sm font-semibold inline-block py-2 px-3 border border-gray-700 rounded focus:bg-green-500 hover:bg-green-500 hover:border-green-500 focus:border-green-500" href="#">Last</a>
        </li>
      </ul>
    )
  }
}
