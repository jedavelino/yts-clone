import React, { Component } from 'react'
import largeCover from '../images/large-cover.jpg'
import { FaDownload } from 'react-icons/fa'
import background from '../images/background.jpg'

export default class Movie extends Component {
  render() {
    return (
      <div>
        <div className="py-4 md:py-12 bg-cover bg-no-repeat relative" style={{backgroundImage: `url(${background})`}}>
        <div className="absolute inset-0" style={{background: `linear-gradient(to bottom,rgba(29,29,29,0.65) 0,rgba(29,29,29,1) 100%)`}}></div>
          <div className="container relative">
            <div className="flex -mx-4">
              <div className="w-1/4 px-4">
                <img className="w-full border-4 border-white rounded-sm" src={largeCover} alt=""/>
                <button role="button" className="bg-green-500 flex items-center justify-center font-bold mt-2 py-2 rounded text-white w-full hover:bg-green-600 focus:bg-green-600">
                  <FaDownload className="text-green-700" />
                  <span className="ml-2">Download</span>
                </button>
              </div>
              <div className="w-2/4 px-4">
                <h1 className="text-white text-5xl font-semibold leading-tight">Dark Figure of Crime</h1>
                <h2>2018</h2>
                <h3>Crime / Drama</h3>
              </div>
              <div className="w-1/4 px-4">
                <p className="text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi error, voluptas et officia beatae aperiam perspiciatis libero aut quibusdam placeat corporis eaque dolores, assumenda fuga tempora vitae delectus consectetur ut obcaecati. Illum accusamus illo voluptatibus, iure blanditiis libero quisquam praesentium debitis? Corporis sit cumque quo vero in harum. Quo suscipit nam ipsum aliquam at eos deserunt laborum tempora earum adipisci. Et obcaecati consectetur similique. Explicabo quisquam necessitatibus voluptate, optio vitae error ut perspiciatis nulla laudantium neque expedita a tempora doloribus possimus placeat praesentium porro soluta ipsa delectus ullam vel sunt iste. Obcaecati minima quis possimus! Sunt delectus earum libero dolor repellendus vero officiis obcaecati sapiente molestias. Possimus, fugit. Explicabo amet perferendis beatae maxime aliquid libero porro sit voluptatum dolor suscipit exercitationem, necessitatibus tempore illum labore vitae, quia quas accusamus at dolorum velit assumenda error in voluptas. Doloremque, quasi amet sapiente tempora nostrum, impedit saepe aliquid vitae nisi provident architecto inventore aliquam minima! Minima aspernatur minus sapiente ad aut doloribus perferendis magni deserunt. Laborum, dolorem quaerat at asperiores perspiciatis similique nobis corporis blanditiis corrupti, ullam nam quas! Aspernatur impedit voluptates labore placeat excepturi deserunt laborum ea quibusdam error explicabo, ullam ab? Aliquam molestiae nihil iure ipsa aut enim a consequuntur ipsam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
