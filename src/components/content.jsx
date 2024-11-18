import React from "react";
import {Link} from 'react-router-dom'

const Content = () => {

    const Content=[
        {
            'id' : 1,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models.",
            'coverImg' : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-146620824/no-brand_no-brand_full01.jpg'
        },
        {
            'id' : 2,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models.",
            'coverImg' : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-146620824/no-brand_no-brand_full01.jpg'
        },
        {
            'id' : 3,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models.",
            'coverImg' : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-146620824/no-brand_no-brand_full01.jpg'
        },
        {
            'id' : 4,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models. ",
            'coverImg' : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-146620824/no-brand_no-brand_full01.jpg'
        },
        {
            'id' : 5,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models.  ",
            'coverImg' : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-146620824/no-brand_no-brand_full01.jpg'
        },
        {
            'id' : 6,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models.  ",
            'coverImg' : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-146620824/no-brand_no-brand_full01.jpg'
        }
    ]

    return(
    <div className="w-full bg-[#f9f9f9] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-2 gap-6 px-4 text-black">
                
                
                {Content.map((content)=>

                <Link to={`/blog/${content.id}`}>
                <div className="bg-emerald-200 rounded-xl overflow-hidden drop-shadow-md">
                    <img className="h-56 w-full object-cover" src={content.coverImg} />
                        <div className="p-8">
                            <h3 className="font-bold text-xl">
                                {content.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {content.desc}
                            </p>
                        </div>
                </div>
                </Link>
                )}
            </div>
        </div>
    </div>
    )
}

export default Content