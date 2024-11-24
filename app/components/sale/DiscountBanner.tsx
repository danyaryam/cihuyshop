import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import iphone from '@/app/src/sale/sale_iphone.png';

interface CountdownProps {
    targetDate: Date;
}

const DiscountBanner: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = targetDate.getTime() - new Date().getTime();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!isClient) {
        return null;
    }

    return (
        <div className="relative bg-stone-200 w-full flex items-center justify-center p-8">
            {/* Gambar menjadi background di mobile */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 sm:hidden"
                style={{ backgroundImage: `url(${iphone.src})` }}
            ></div>

            <div className="relative container flex flex-col items-center text-center max-w-md p-6">
                <button className="bg-green-600 text-sm font-medium shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto text-white px-4 py-2 rounded-full mb-4">
                    Hurry Up!
                </button>
                <h1 className="text-4xl font-bold mb-2">Up To 25% Discount</h1>
                <h3 className="text-2xl mb-4">Check it out</h3>

                <div className="flex gap-4 mb-4">
                    {Object.entries(timeLeft).map(([label, value]) => (
                        <div key={label} className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg w-16">
                            <div className="text-2xl font-bold">{String(value).padStart(2, '0')}</div>
                            <div className="text-sm text-gray-500">{label.toUpperCase()}</div>
                        </div>
                    ))}
                </div>

                <h5 className="text-black cursor-pointer font-semibold">Shop Now</h5>
            </div>

            {/* Gambar hanya muncul di layar besar */}
            <div className="hidden sm:block ml-8">
                <Image
                    src={iphone}
                    width={550}
                    height={600}
                    alt="iPhone Sale"
                    className=""
                />
            </div>
        </div>
    );
};

export default DiscountBanner;