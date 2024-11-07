'use client'

import React from 'react'
import Image from 'next/image'

import ps from '@/app/src/sale/stick.jpg'
import camera from '@/app/src/sale/camera.jpg'

const Sale = () => {
    const sale = [
        { srcImage: ps, alt: 'Stick PS 4', title: 'FANTASY & GAMES', desc: 'Just Starting at $880 Harry Up!' },
        { srcImage: camera, alt: 'Canon Camera 12098', title: 'CAMERA & DOCUMENTATION', desc: 'Starting at $450 Just Now.' }
    ]
    return (
        <div>
            <div className="flex justify-center items-center flex-wrap gap-8 py-8">
                {sale.map((item, index) => (
                    <div key={index} className="relative w-[390px] h-[400px] overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={item.srcImage}
                            alt={item.alt}
                            height={400}
                            width={390}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center text-center p-4 pt-20">
                            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                            <h2 className="text-2xl font-bold text-white mb-4">{item.desc}</h2>
                            <button className="bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-2xl px-4 py-2 text-white">
                                Get Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sale