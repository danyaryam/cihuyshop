'use client'


import Image from 'next/image'

import acsesories from '@/app/src/category/acsesories.png'
import beauty from '@/app/src/category/beauty.png'
import handphone from '@/app/src/category/handphone.png'
import jacket from '@/app/src/category/jacket.png'
import celana from '@/app/src/category/jelana.png'
import laptop from '@/app/src/category/laptop.png'
import motorbike from '@/app/src/category/motorbike.png'
import otomotif from '@/app/src/category/otomotif.png'
import prabot_rumah_tangga from '@/app/src/category/prabot-rumah-tangga.png'
import sepatu from '@/app/src/category/sepatu.png'
import tshirt from '@/app/src/category/tshirt.png'
import tv from '@/app/src/category/tv.png'

const Categories = () => {
    const category = [
        { imgSrc: acsesories, title: 'Accessories', desc: 'Accessories' },
        { imgSrc: beauty, title: 'Beauty', desc: 'Beauty' },
        { imgSrc: celana, title: 'Pants', desc: 'Pants' },
        { imgSrc: handphone, title: 'Handphone', desc: 'Handphone' },
        { imgSrc: jacket, title: 'Jacket', desc: 'Jacket' },
        { imgSrc: laptop, title: 'Laptop', desc: 'Laptop' },
        { imgSrc: motorbike, title: 'Motorbike', desc: 'Motorbike' },
        { imgSrc: otomotif, title: 'Automotif', desc: 'Automotive' },
        { imgSrc: prabot_rumah_tangga, title: 'Furniture', desc: 'Furniture' },
        { imgSrc: sepatu, title: 'Shoes', desc: 'Shoes' },
        { imgSrc: tshirt, title: 'T-Shirt', desc: 'T-Shirt' },
        { imgSrc: tv, title: 'Electronics', desc: 'Electronics' }
    ]

    return (
        <div className="w-full my-8 px-4 mx-auto">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {category.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center shadow-md">
                            <Image
                                src={item.imgSrc}
                                alt={item.desc}
                                width={100}
                                height={100}
                                className="rounded-lg object-contain w-full h-28 mb-2"
                            />
                            <h4 className="text-sm font-semibold text-gray-700">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories
