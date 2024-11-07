"use client";

import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const scrollY = window.scrollY;
            setIsNavbarVisible(scrollY <= lastScrollY || scrollY < 1);
            setLastScrollY(scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },); //[handleScroll]

    return (
        <nav className={`flex justify-between items-center px-8 py-4 bg-gray-50 bg-opacity-80 border-b border-green-400 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <a href="#" className="text-2xl font-bold italic text-black">
                Cihuy<span className="text-green-400">Shop</span>.
            </a>
            <div className="hidden md:flex space-x-6" id="navbar-nav">
                <a
                    href="#home"
                    className="text-black transition-colors duration-300 hover:text-rose-500 hover:ease-in-out hover:underline hover:underline-offset-4 text-lg"
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="text-black transition-colors duration-300 hover:text-rose-500 hover:ease-in-out hover:underline hover:underline-offset-4 text-lg"
                >
                    Tentang Kami
                </a>
                <a
                    href="#menu"
                    className="text-black transition-colors duration-300 hover:text-rose-500 hover:ease-in-out hover:underline hover:underline-offset-4 text-lg"
                >
                    Menu
                </a>
                <a
                    href="#order"
                    className="text-black transition-colors duration-300 hover:text-rose-500 hover:ease-in-out hover:underline hover:underline-offset-4 text-lg"
                >
                    Pemesanan
                </a>
                <a
                    href="#address"
                    className="text-black transition-colors duration-300 hover:text-rose-500 hover:ease-in-out hover:underline hover:underline-offset-4 text-lg"
                >
                    Alamat
                </a>
            </div>
            {/* ini button lain */}
            <div className="">
                <button className='text-black px-2'>
                    <svg className='h-8 w-8'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M12 3c-1.1 0-2 .9-2 2v1a7 7 0 0 0-5 6.7v4.3h14v-4.3a7 7 0 0 0-5-6.7v-1c0-1.1-.9-2-2-2z" />
                        <path d="M13.5 20a1.5 1.5 0 0 1-3 0" />
                    </svg>
                </button>
                <button className='text-black px-2'>
                    <svg className='h-8 w-8'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5">
                        <path d="M4 4h2l1.5 12h11L21 8H6" />
                        <circle cx="9" cy="19" r="1.5" />
                        <circle cx="17" cy="19" r="1.5" />
                        <path d="M2 2h3" />
                    </svg>
                </button>
                <button className='text-black px-2'>
                    <svg className='h-8 w-8'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="9" r="3" />
                        <path d="M6 17c0-4 5-4 6-4s6 0 6 4" />
                    </svg>
                </button>
            </div>
            <div className="flex space-x-4 md:hidden">
                <button onClick={toggleSidebar} className="text-black transition-colors duration-300 hover:text-rose-500">
                    <svg className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <div id="mobile-sidebar" className="fixed inset-0 z-40 bg-black bg-opacity-70 flex justify-end">
                    <div className="w-52 bg-gray-50 p-6">
                        <button
                            onClick={toggleSidebar}
                            className="text-black transition-colors duration-300 hover:text-rose-500 mb-6"
                        >
                            <svg className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <a
                            href="#home"
                            className="block py-2 text-black transition-colors duration-300 hover:text-rose-500 hover:ease-in-out hover:underline hover:underline-offset-4 text-lg"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="block py-2 text-black transition-colors duration-300 hover:text-rose-500 hover:ease-in-out hover:underline hover:underline-offset-4 text-lg"
                        >
                            Tentang Kami
                        </a>
                        <a
                            href="#menu"
                            className="block py-2 text-black transition-colors duration-300 hover:text-rose-500 hover:ease-in-out hover:underline hover:underline-offset-4 text-lg"
                        >
                            Menu
                        </a>
                        <a
                            href="#order"
                            className="block py-2 text-black transition-colors duration-300 hover:text-rose-500 hover:ease-in-out hover:underline hover:underline-offset-4 text-lg"
                        >
                            Pemesanan
                        </a>
                        <a
                            href="#address"
                            className="block py-2 text-black transition-colors duration-300 hover:text-rose-500 hover:ease-in-out hover:underline hover:underline-offset-4 text-lg"
                        >
                            Alamat
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
