import React from 'react'

function Footer() {
  return (
    <div className='mt-20  '>
      <h1 className='text-3xl font-bold'>Follow my journey</h1>
      <p className='text-gray-600 text-xl w-11/12  sm:w-1/2 mx-auto my-3  '>Get notified about updates and be the first to get early access to the new, safer, and smarter way to archive your files.</p>
      <div className='p-2 '>
        <input type="text" placeholder='Enter Your Email' className='p-2 text-xl w-3/5 sm:w-1/2 ' />
        <button className='bg-gray-400 text-white  p-2 text-xl'>Send It</button>
        
      </div>
      <h5 className='text-gray-600 my-1  w-11/12 sm:w-1/2 mx-auto'>By subscribing to our newsletter you accept to receive recurring emails about our product and company</h5>

 
    </div>
  )
}

export default Footer
