import React from 'react'

function About() {
  return (
    <div className=" w-full sm:w-4/5 mx-auto">
        
        <p className='text-xl sm:text-2xl font-serif my-10 w-11/12 sm:w-3/4 sm mx-auto'>
        Hi, I’m Margaret. Welcome to my safe place where I write about everything I find inspiring and you might find too.
        </p>
        <figure className='flex flex-col justify-center items-center rounded-md'>
          <img src="https://cdn.pixabay.com/photo/2024/01/15/21/13/puppy-8510899_640.jpg" alt=""  />
          <figcaption>...THAT</figcaption>
        </figure>

        <div>
          <h1 className='text-2xl font-serif text-left ml-10 mt-10'><q>You go girl!</q> <span>— George Washington
          </span></h1>
          <p className='text-xl from-neutral-700  font-serif text-justify w-3/4 mx-auto my-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin eu tincidunt porta condimentum mauris interdum facilisis. Maecenas augue netus faucibus lorem. Nulla sed non, elementum mi netus libero. Tempor quam sed nunc fames bibendum id facilisis ipsum commodo. Neque, augue feugiat eu condimentum ut lorem. Faucibus mi tellus, iaculis facilisis sagittis. Viverra hendrerit magna pellentesque at convallis purus amet, pellentesque et. Potenti tempor volutpat massa tortor mauris tincidunt tellus diam pharetra. Viverra praesent lacinia dictum tortor erat risus nulla gravida sed. Platea varius venenatis habitasse est maecenas sapien eu, volutpat. Cursus diam auctor neque ut. Tempor, in tortor odio in mollis sollicitudin.</p>
        </div>

  </div>
      )
}

export default About
