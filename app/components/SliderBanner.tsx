'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import banner1 from '@/app/src/BannerImages/headset.jpg';
import banner2 from '@/app/src/BannerImages/shoes.jpg';
import banner3 from '@/app/src/BannerImages/hoodie.jpg';
import banner4 from '@/app/src/BannerImages/t-shirt.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const banners = [
        { imageSrc: banner1, title: 'Let us find your Forever Home.', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { imageSrc: banner2, title: 'Find Your Perfect Place.', description: 'Nesciunt illo tenetur fuga ducimus numquam ea!' },
        { imageSrc: banner3, title: 'Luxury Living for You.', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { imageSrc: banner4, title: 'Move Into Comfort.', description: 'Nesciunt illo tenetur fuga ducimus numquam ea!' },
    ];

    return (
        <Slider {...settings}>
            {banners.map((banner, index) => (
                <div key={index} className="relative h-screen">
                    <Image
                        src={banner.imageSrc}
                        alt={banner.title}
                        fill
                        sizes='100vw'
                        style={{ objectFit: 'cover' }}
                        className="absolute inset-0"
                    />

                    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl font-extrabold sm:text-5xl">
                                <strong className="block font-extrabold text-green-600">{banner.title}</strong>
                            </h1>
                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                                {banner.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a href="#" className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto">
                                    Order Now
                                </a>

                                <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto">
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default SliderBanner;