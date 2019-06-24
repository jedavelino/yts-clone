import React, { Component } from 'react'
import largeCover from '../images/large-cover.jpg'
import { FaDownload, FaHeart, FaStar } from 'react-icons/fa'
import background from '../images/background.jpg'
import logoImdb from '../images/logo-imdb.svg'
import SideCard from '../components/SideCard'

export default class Movie extends Component {
  render() {
    return (
      <div>
        <div className="py-4 md:py-12 bg-cover bg-no-repeat relative" style={{backgroundImage: `url(${background})`}}>
        <div className="absolute inset-0" style={{background: `linear-gradient(to bottom,rgba(29,29,29,0.65) 0,rgba(29,29,29,1) 100%)`}}></div>
          <div className="container relative">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full flex flex-col px-4 sm:hidden">
                <span className="text-white text-xl font-semibold leading-none">Dark Figure of Crime</span>
                <span className="mt-1 text-white font-semibold leading-tight">2018</span>
                <span className="text-white font-semibold leading-tight">Crime / Drama</span>
              </div>
              <div className="w-1/2 px-4 mt-4 sm:w-1/3 sm:mt-0 md:w-1/4">
                <img className="w-full border-4 border-white rounded-sm" src={largeCover} alt=""/>
                <button role="button" className="hidden bg-green-500 font-bold mt-2 py-2 rounded text-white w-full hover:bg-green-600 focus:bg-green-600 md:flex md:items-center md:justify-center">
                  <FaDownload className="text-green-700" />
                  <span className="ml-2">Download</span>
                </button>
              </div>
              <div className="flex flex-col w-1/2 sm:w-2/3 md:w-2/4 px-4">
                <div className="hidden sm:block">
                  <h1 className="text-white text-4xl font-semibold leading-none sm:text-2xl lg:text-3xl">Dark Figure of Crime</h1>
                  <h2 className="mt-6 text-white text-lg font-semibold leading-tight sm:mt-2">2018</h2>
                  <h3 className="text-white text-lg font-semibold leading-tight sm:mt-2">Crime / Drama</h3>
                </div>
                <div className="flex flex-col flex-col-reverse">
                  <div className="flex flex-col mt-4 sm:mt-6 sm:flex-row">
                    <span className="hidden text-white lg:inline-block">Available in:</span>
                    <span className="py-1 px-3 text-white inline-flex items-center border text-sm rounded-sm leading-snug border-gray-600 bg-black-900 hover:text-gray-500 lg:ml-2">
                      <FaDownload className="text-green-700 xl:hidden" />
                      <span className="ml-2 xl:ml-0">720p.BluRay</span>
                    </span>
                    <span className="py-1 px-3 mt-2 text-white inline-flex items-center border text-sm rounded-sm leading-snug border-gray-600 bg-black-900 hover:text-gray-500 sm:mt-0 sm:ml-1">
                      <FaDownload className="text-green-700 xl:hidden" />
                      <span className="ml-2 xl:ml-0">1080p.BluRay</span>
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center relative pl-16 sm:mt-6 md:pl-20">
                      <div className="absolute top-0 left-0 bottom-0 flex items-center">
                        <FaHeart className="text-green-500" />
                      </div>
                      <span className="text-white text-lg font-bold leading-tight">1</span>
                    </div>
                    <div className="mt-2 flex items-center relative pl-16 md:pl-20 md:mt-4">
                      <div className="absolute top-0 left-0 bottom-0 flex items-center">
                        <img src={logoImdb} alt=""/>
                      </div>
                      <div className="text-white text-lg font-bold leading-tight flex items-center">
                        6.6
                        <FaStar className="hidden md:block text-green-500 ml-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden px-4 md:block md:w-1/4 lg:w-1/5">
                <h4 className="font-bold text-white">Similar Movies</h4>
                <div className="flex flex-wrap -mx-2">
                  <SideCard />
                  <SideCard />
                  <SideCard />
                  <SideCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
