import React, { Component } from 'react'
import largeCover from '../images/large-cover.jpg'
import { FaDownload, FaHeart, FaStar, FaFolder, FaExpandArrowsAlt, FaVolumeUp, FaRegEye, FaClosedCaptioning, FaFilm, FaRegClock, FaCommentAlt } from 'react-icons/fa'
import background from '../images/background.jpg'
import logoImdb from '../images/logo-imdb.svg'
import SideCard from '../components/SideCard'
import defaultAvatar from '../images/default_avatar.jpg'
import screenshot1 from '../images/large-screenshot1.jpg'
import screenshot2 from '../images/medium-screenshot2.jpg'
import screenshot3 from '../images/medium-screenshot3.jpg'
import playTrailer from '../images/play-trailer.svg'

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
                <span className="mt-2 text-white font-semibold leading-tight">2018</span>
                <span className="mt-2 text-white font-semibold leading-tight">Crime / Drama</span>
              </div>
              <div className="w-1/2 px-4 mt-4 sm:mt-0 md:w-1/3 lg:w-1/5">
                <img className="w-full border-4 border-white rounded-sm" src={largeCover} alt=""/>
                <button role="button" className="hidden bg-green-500 font-bold mt-2 py-2 rounded text-white w-full hover:bg-green-600 focus:bg-green-600 md:flex md:items-center md:justify-center">
                  <FaDownload className="text-green-700" />
                  <span className="ml-2">Download</span>
                </button>
              </div>
              <div className="flex flex-col w-1/2 md:w-2/3 px-4 lg:w-3/5">
                <div className="hidden sm:block">
                  <h1 className="text-white text-4xl font-semibold leading-none sm:text-2xl lg:text-3xl">Dark Figure of Crime</h1>
                  <h2 className="mt-6 text-white text-lg font-semibold leading-tight sm:mt-2">2018</h2>
                  <h3 className="text-white text-lg font-semibold leading-tight sm:mt-2">Crime / Drama</h3>
                </div>
                <div className="flex flex-col flex-col-reverse">
                  <div className="flex flex-col mt-4 sm:mt-6 sm:flex-row">
                    <em className="hidden text-white lg:inline-block">Available in:</em>
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
              <div className="hidden px-4 lg:block lg:w-1/5">
                <h4 className="font-bold text-white">Similar Movies</h4>
                <div className="flex flex-wrap -mx-2 -mt-2">
                  <SideCard />
                  <SideCard />
                  <SideCard />
                  <SideCard />
                </div>
              </div>
            </div>

            <div className="hidden -mx-1 mt-10 lg:flex">
              <div className="w-1/3 px-1">
                <span className="block img-aspect-16:9 relative hover:opacity-75">
                  <img className="absolute inset-0 w-full h-full" src={screenshot1} alt=""/>
                  <span className="flex items-center justify-center absolute inset-0">
                    <img className="" src={playTrailer} alt=""/>
                  </span>
                </span>
              </div>
              <div className="w-1/3 px-1">
                <span className="block img-aspect-16:9 relative hover:opacity-75">
                  <img className="absolute inset-0 w-full h-full" src={screenshot2} alt=""/>
                </span>
              </div>
              <div className="w-1/3 px-1">
                <span className="block img-aspect-16:9 relative hover:opacity-75">
                  <img className="absolute inset-0 w-full h-full" src={screenshot3} alt=""/>
                </span>
              </div>
            </div>

            <div className="md:flex md:-mx-4">
              <div className="mt-6 md:w-1/2 md:px-4 lg:w-2/3 xl:pr-20">
                <h3 className="font-bold text-white text-xl">Synopsis</h3>
                <p className="text-gray-500 mt-2">A criminal thriller about the fierce psychological confrontation between a detective and a killer who confessed to multiple murders.</p>

                <div className="mt-6">
                  <span className="text-gray-500 block">
                    <em>Uploaded By: <span className="font-bold">FREEMAN</span></em>
                  </span>
                  <span className="text-gray-500 block"><em>Downloaded 1,414 times</em></span>
                  <span className="text-gray-500 block"><em>June 15, 2019 at 07:18 PM</em></span>
                </div>
              </div>
              <div className="mt-6 md:w-1/2 md:px-4 lg:w-1/3">
                <h3 className="font-bold text-white text-xl">Director</h3>
                <div className="flex items-center mt-3 border-b border-gray-600 pb-3">
                  <img className="h-10 w-10 block rounded-full" src={defaultAvatar} alt="Tae-Gyoon Kim"/>
                  <span className="ml-2 text-sm font-bold text-gray-500">Tae-Gyoon Kim</span>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-white text-xl">Cast</h3>
                  <div className="flex items-center mt-3 border-b border-gray-600 pb-3">
                    <img className="h-10 w-10 block rounded-full" src={defaultAvatar} alt="Paz Vega"/>
                    <span className="ml-2 text-sm font-bold text-gray-500">Paz Vega <span className="font-normal text-white">as Alma</span></span>
                  </div>
                  <div className="flex items-center mt-3 border-b border-gray-600 pb-3">
                    <img className="h-10 w-10 block rounded-full" src={defaultAvatar} alt="Karl Urban"/>
                    <span className="ml-2 text-sm font-bold text-gray-500">Karl Urban <span className="font-normal text-white">as Strode</span></span>
                  </div>
                  <div className="flex items-center mt-3 border-b border-gray-600 pb-3">
                    <img className="h-10 w-10 block rounded-full" src={defaultAvatar} alt="Antonio Banderas"/>
                    <span className="ml-2 text-sm font-bold text-gray-500">Antonio Banderas <span className="font-normal text-white">as Frank Valera</span></span>
                  </div>
                  <div className="flex items-center mt-3 border-b border-gray-600 pb-3">
                    <img className="h-10 w-10 block rounded-full" src={defaultAvatar} alt="Johnathon Schaech"/>
                    <span className="ml-2 text-sm font-bold text-gray-500">Johnathon Schaech <span className="font-normal text-white">as Lustiger</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <span className="hidden py-2 text-white font-bold rounded-t w-64 px-4 lg:inline-block">Tech Specs</span>
                <span className="px-4 py-2 text-white font-bold bg-gray-1000 inline-block rounded-t md:px-10">720p.WEB</span>
                <span className="px-4 py-2 text-gray-500 inline-block md:px-10">1080p.WEB</span>
              </div>
              <div className="bg-gray-1000 px-4 md:px-10">
                <div className="pt-4 md:flex md:flex-wrap md:-mx-4 md:pt-0">
                  <div className="md:w-1/2 md:px-4 lg:w-1/4">
                    <div className="flex items-center border-b border-gray-600 pb-4 md:mt-4">
                        <FaFolder className="text-gray-500" />
                        <span className="text-gray-500 text-sm ml-3">754.55 MB</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-4 lg:w-1/4">
                    <div className="flex items-center mt-4 border-b border-gray-600 pb-4">
                      <FaExpandArrowsAlt className="text-gray-500" />
                      <span className="text-gray-500 text-sm ml-3">1280*720</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-4 lg:w-1/4">
                    <div className="flex items-center mt-4 border-b border-gray-600 pb-4">
                      <FaVolumeUp className="text-gray-500" />
                      <span className="text-gray-500 text-sm ml-3">English</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-4 lg:w-1/4">
                    <div className="flex items-center mt-4 border-b border-gray-600 pb-4">
                      <FaRegEye className="text-gray-500" />
                      <span className="text-gray-500 text-sm ml-3">R</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-4 lg:w-1/4">
                    <div className="flex items-center mt-4 border-b border-gray-600 pb-4 lg:border-none">
                      <FaClosedCaptioning className="text-gray-500" />
                      <span className="text-gray-500 text-sm ml-3">Subtitles</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-4 lg:w-1/4">
                    <div className="flex items-center mt-4 border-b border-gray-600 pb-4 lg:border-none">
                      <FaFilm className="text-gray-500" />
                      <span className="text-gray-500 text-sm ml-3">23.976 fps</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-4 lg:w-1/4">
                    <div className="flex items-center mt-4 border-b border-gray-600 pb-4 md:border-none">
                      <FaRegClock className="text-gray-500" />
                      <span className="text-gray-500 text-sm ml-3">1hr 27min</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-4 lg:w-1/4">
                    <div className="flex items-center mt-4 pb-4">
                      <span className="font-bold text-gray-500 text-sm">P/S</span>
                      <span className="text-gray-500 text-sm ml-3">707 / 277</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:flex md:flex-row-reverse md:-mx-4">
              <div className="md:w-1/2 md:px-4">
                <h3 className="flex items-center font-bold text-white text-xl">
                  <FaStar className="text-green-500" />
                  <span className="ml-2">Movie Reviews</span>
                </h3>
                <div>
                  <div className="pt-4">
                    <div className="text-sm text-gray-500 flex">
                      Reviewed by <span className="font-bold ml-1">ActionFan-Reviews</span>
                      <div className="flex items-center ml-2">
                        <FaStar className="text-green-500" />
                        <span className="font-bold text-white ml-2">7 / 10</span>
                      </div>
                    </div>
                    <h4 className="mt-3 font-bold text-sm text-gray-400">Banderas Is Back In Action !</h4>
                    <div className="mt-3 text-gray-500 text-sm">
                      <p>2017 has seen the return of Antonio Banderas in full Liam Neeson action hero mode, First punishing the bad guys in the decent B-level action flick "Security", and now another in "Acts Of Vengeance". These kinds of low budget action flicks are pretty bland and run of the mill for the most part, but with a solid yet underrated action director like Isaac Florentine (Ninja II, Undisputed II & III) and a good actor like Antonio Banderas, the movie does stand out as a good direct to VOD action flick. As a guy who grew up on these throwback action films, I liked it. Overall,a fast paced, efficient, action packed movie. Loaded with some well shot and choreographed fights and Banderas delivering justice and kicking ass like its back in the 90's. </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <div className="text-sm text-gray-500 flex">
                      Reviewed by <span className="font-bold ml-1">stephenw-30180</span>
                      <div className="flex items-center ml-2">
                        <FaStar className="text-green-500" />
                        <span className="font-bold text-white ml-2">7 / 10</span>
                      </div>
                    </div>
                    <h4 className="mt-3 font-bold text-sm text-gray-400">Another Banderas action thriller</h4>
                    <div className="mt-3 text-gray-500 text-sm">
                      <p>It seems Antonio Banderas is making a lot of movies of the same genre lately. This is not to say that's bad. I Think he does quite a good job as an "average man" tough guy. This film is no different, however, there are some exceptions.</p>
                      <p>I gave this film a generous 7/10. Mostly because I am liking Banderas more and more of late and the plot of this film, although flimsy at times, is pretty good and fast paced.</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4 pt-2 border-t border-gray-600">
                  <span className="text-sm text-gray-500 font-bold">Read more IMDb reviews</span>
                </div>
              </div>
              <div className="mt-6 md:w-1/2 md:px-4">
                <h3 className="flex items-center font-bold text-white text-xl">
                  <FaCommentAlt className="text-green-500" />
                  <span className="ml-2">1 Comments</span>
                </h3>
                <div className="p-5 mt-4 flex bg-gray-1000">
                  <img className="h-10 w-10 block rounded-full" src={defaultAvatar} alt="Paz Vega"/>
                  <div className="text-sm ml-5 w-full">
                    <span className="text-gray-500 block font-bold">rsperry</span>
                    <span className="text-gray-500 block">July 05, 2019 at 03:10 pm</span>
                    <p className="text-white mt-2">Thanks, or better, gracias :-)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
