import React from "react";
import {useParams} from 'react-router-dom';


const BlogContent = () => {

    const {id} = useParams()

    const blogs=
      {
        
        'title' : 'KAIDO HOUSE',
        'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }


    return(
        <div className="w-full pb-10 bg-[#f9f9f9]">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-2 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
              <div className="col-span-2 gap-x-8 gap-y-8">
                <img className="h-56 w-full object-cover" src="" alt="" />
                <h1 className="py-5 font-bold">{id}</h1>
                <p className="text-sm">{blogs.description}</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default BlogContent