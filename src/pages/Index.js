import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import Card from '../components/Card'
import background from '../images/background.jpg'
import QuickLinks from '../components/QuickLinks'

export default function Index() {
  return (
    <div>
      <div className="py-4 md:py-12 bg-cover bg-no-repeat relative" style={{backgroundImage: `url(${background})`}}>
        <div className="absolute inset-0" style={{background: `linear-gradient(to bottom,rgba(29,29,29,0.65) 0,rgba(29,29,29,1) 100%)`}}></div>
        <div className="container relative">
          <h1 className="hidden md:block text-5xl font-semibold text-gray-300 text-center leading-tight">Download YTS YIFY movies: HD smallest size</h1>
          <p className="hidden md:block text-gray-300 text-center max-w-3xl mx-auto mt-4">Welcome to the official <b>YTS.LT</b> website. Here you will be able to browse and download YIFY movies in excellent 720p, 1080p and 3D quality, all at the smallest file size. Only here: YTS Movies Torrents.</p>
          <div className="mt-0 md:mt-8 border-b border-gray-700 pb-4">
            <h2 className="flex items-center justify-center text-xl font-semibold text-gray-300">
              <FaStar className="text-green-500" />
              <span className="ml-3">Popular Downloads</span>
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4 md:-mx-6">
            <Card />
          </div>
        </div>
      </div>

      <div className="py-4 md:py-12 bg-gray-1000">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="text-white lg:text-lg font-semibold">Latest YIFY Movies Torrents</h2>
            <Link className="text-gray-500 text-sm font-bold px-3 hover:text-white" to="/">Browse All</Link>
          </div>
          <div className="flex flex-wrap -mx-4 md:-mx-6">
            <Card />
          </div>
        </div>
      </div>

      <div className="py-4 md:py-12 bg-gray-900">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="text-white lg:text-lg font-semibold">Upcoming YIFY Movies</h2>
            <Link className="text-gray-500 text-sm font-bold px-3 hover:text-white" to="/">Request a Movie</Link>
          </div>
          <div className="flex flex-wrap -mx-4 md:-mx-6">
            <Card />
          </div>
        </div>
      </div>

      <QuickLinks />
    </div>
  )
}
