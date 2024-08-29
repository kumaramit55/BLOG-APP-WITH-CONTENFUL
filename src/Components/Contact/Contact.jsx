import React from 'react'

export default function Contact() {
  return (
   <form action="" className=''>
    <div className='flex flex-col w-4/5 sm:w-1/2 mx-auto border-b-2 border-slate-100 p-3 mb-4'>
      <label htmlFor="" className='text-left text-xl font-mono font-semibold'>Name</label>
      <input type="text" className='text-xl rounded-md py-2 px-1 font-medium' placeholder='Jon Doe' />
    </div>

    <div className='flex flex-col w-4/5 sm:w-1/2 mx-auto  border-b-2 border-slate-100 p-3'>
      <label htmlFor="" className='text-left text-xl font-mono font-semibold'>Email Adrress</label>
      <input type="text" className='text-xl rounded-md py-2 px-1 font-medium'placeholder='jondoes@gmail.com' />
    </div>
    <div className='flex flex-col w-4/5  sm:w-1/2 mx-auto  border-b-2 border-slate-100 p-3'>
    <label htmlFor="" className='text-left text-xl font-mono font-semibold'>Message</label>
    <textarea name="" id="" rows={4} cols={20} placeholder='Write Your Message Here' className='text-xl rounded-md p-1'></textarea>
      
    </div>

    <div className='text-xl mt-4'><button className='bg-gray-400 p-3 rounded-sm font-serif'>Send message</button></div>
    

    
   </form>
  )
}
