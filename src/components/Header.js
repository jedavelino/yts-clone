import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoYts from '../images/logo-YTS.svg'
import { FaSearch, FaList, FaUser, FaAngleDown } from 'react-icons/fa'
import SearchFilters from './SearchFilters'

export default class Header extends Component {
  state = {
    showSearch: false,
  }
  toggleSearch = e => {
    e.preventDefault()

    this.setState({
      showSearch: !this.state.showSearch
    })
  }
  render() {
    return (
      <header>
        <nav className="flex items-center justify-between px-4 md:px-10 py-3 bg-gray-900 border-b border-gray-700">
          <div>
            <Link to="/">
              <img src={logoYts} alt=""/>
            </Link>
          </div>
          <div>
            <div className="hidden md:flex">
              <div className="relative">
                <span className="flex items-center absolute pin-t h-full pl-2">
                  <FaSearch className="text-gray-500" />
                </span>
                <input type="search" className="appearance-none block w-64 bg-gray-900 text-white border-2 border-gray-700 rounded-full py-2 pl-8 pr-4 leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500 font-medium text-xs lg:text-sm" placeholder="Quick search" />
              </div>
              <ul className="list-reset flex items-center ml-3">
                <li>
                  <NavLink className="text-gray-500 text-xs lg:text-sm font-medium px-3 hover:text-white" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-500 text-xs lg:text-sm font-medium px-3 hover:text-white" to="/browse-movies">Browse Movies</NavLink>
                </li>
              </ul>
              <ul className="list-reset flex items-center">
                <li>
                  <a className="text-white text-xs lg:text-sm font-medium px-3 hover:text-gray-500" href="#">Login</a>
                </li>
                <li>
                  <a className="text-white text-xs lg:text-sm font-medium px-3 hover:text-gray-500" href="#">Register</a>
                </li>
              </ul>
            </div>
            <ul className="list-reset flex items-center md:hidden">
              <li>
                <a onClick={this.toggleSearch} role="button" className="inline-block text-gray-300 text-sm font-medium px-2 focus:text-white" href="#">
                  <FaSearch className="h-6 w-6" />
                </a>
              </li>
              <li>
                <Link className="inline-block text-gray-300 text-sm font-medium px-2 focus:text-white" to="/browse-movies">
                  <FaList className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <a role="button" className="inline-block text-gray-300 text-sm font-medium pl-2 focus:text-white" href="#">
                  <FaUser className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        { this.state.showSearch && <SearchFilters /> }
      </header>
    )
  }
}
