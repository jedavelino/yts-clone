import React from 'react'
import largeCover from '../images/large-cover.jpg'

export default function SideCard() {
  return (
    <div className="w-1/2 px-2 mt-4">
      <div className="border-4 border-white rounded-sm hover:border-green-500">
        <img className="w-full" src={largeCover} alt=""/>
      </div>
    </div>
  )
}
