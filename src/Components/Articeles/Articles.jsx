import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import client from '../../Contentful/contenful'
function Articles() {
  const [blogs, SetBlogs] = useState()
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchdata = async () => {

      try {
        const entries = await client.getEntries()
        SetBlogs(entries.items)
        console.log(blogs)
        //  console.log(entries)
        setLoading(false)

      } catch (error) {
        console.log(error)

      }
    }

    fetchdata();
  }, [Loading])

  if (Loading) return <p>Loading</p>
  return (
    <div className=" p-5  flex  flex-col  gap-10">
      {
        blogs.map((items) => {
          return(
            <div className='flex flex-col sm:flex-row sm:justify-between' key={items.fields.blogId} >
            <div className='w-full sm:w-1/2 h-auto '>
              <img src={items.fields.articleimage.fields.file.url} alt="" style={{width:400,height:400}} />
            </div>
            <div className='flex flex-col items-start gap-4 sm:w-3/4 w-11/12 ' >
             <h1  className="text-xl sm:text-2xl font-bold"> {items.fields.title}</h1>
              <h4 className='text-xl font-mono font-medium'>{items.fields.publishDate}</h4>
              <p className='text-justify texl-xl font-serif'>{items.fields.description.content[0].content[0].value}</p>
              <NavLink to={`${items.fields.blogId}`}> <button className='text-white font-mono font-semibold bg-blue-600 p-2 rounded-md'>Read More</button>
              </NavLink>

            </div>
            
          </div>
          )
          

           

          

        })
      }

    </div>

  )
}

export default Articles
