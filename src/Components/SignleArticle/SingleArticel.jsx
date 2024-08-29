import React, { useEffect, useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import client from '../../Contentful/contenful'
import { useParams } from 'react-router-dom'
import RichText from '../../Contentful/RichText'


function SingleArticel() {
    const [blog, SetBlog] = useState()
    const [Loading, SetLoading] = useState(true)

    const { blogId } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            try {
                let entries = await client.getEntries()
                let a = entries.items
                console.log(a)
                a.map((item) => {
                    if (item.fields.blogId == blogId) {
                        SetBlog(item.fields)
                        SetLoading(false)
                    }
                })
            } catch (error) {
                console.log(error)
                SetLoading(false)

            }
        }
        fetchData()
    },[Loading])
    if (Loading) return <p>Loading</p>
    return (
        <div className=' w-11/12 mx-auto p-5 '>
            <div className='w-11/12 mx-auto my-4 text-left '>
                <h1 className='text-3xl  font-serif font-bold '>{blog.title}</h1>
                <h3 className='my-1 font-mono font-semibold'>{blog.publishDate}</h3>
                 {/* <img src={blog.articleimage.fields.file.url} alt="" className=' w-11/12 11/12 mx-auto my-10' />  */}
                 <div className='w-11/12 flex flex-col gap-6 text-xl font-serif text-justify mx-auto my-10 '>
                 
                <RichText content={blog.description}/>
                 </div>
                {/* <p className='text-xl font-serif text-justify gap-10 p-10'>{documentToReactComponents(blog.description)}</p> */}
            </div>


        </div>
    )
   
}


export default SingleArticel
