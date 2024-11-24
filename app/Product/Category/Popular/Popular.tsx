"use client"
import React from 'react'
import Image from 'next/image'

import iphone12 from './images/1.png'
import iphone13 from './images/2.png'
import smartwatch from './images/3.png'
import spiker from './images/4.png'
import iphone12white from './images/5.png'
import macprom1 from './images/6.png'
import airpod from './images/7.png'
import caseairpod from './images/8.png'
import iphone11 from './images/9.png'

const Popular = () => {
    const populars = [
        { imgSrc: iphone12, title: 'Iphone 12', desc: 'Electronic' },
        { imgSrc: iphone13, title: 'Iphone 13', desc: 'Electronic' },
        { imgSrc: smartwatch, title: 'Smart Watch', desc: 'Electronic' },
        { imgSrc: spiker, title: 'Apple Sound', desc: 'Electronic' },
        { imgSrc: iphone12white, title: 'White Phone', desc: 'Electronic' },
        { imgSrc: macprom1, title: 'Mac Pro M1 2024', desc: 'Electronic' },
        { imgSrc: airpod, title: 'Air Pods 2023', desc: 'Electronic' },
        { imgSrc: caseairpod, title: 'Air pods Case', desc: 'Accessories' },
        { imgSrc: iphone11, title: 'Iphone 11', desc: 'Electronic' },
    ]

    return (
        <div className="w-full my-8 px-4 mx-auto">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {populars.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center shadow-lg">
                            <Image
                                src={item.imgSrc}
                                alt={item.desc}
                                width={100}
                                height={100}
                                className="rounded-lg object-contain w-full h-28 mb-2"
                            />
                            <h4 className="text-sm font-semibold py-2 text-gray-700">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popular