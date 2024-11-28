"use client";

import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSidebarOpenCart, setIsSidebarOpenCart] = useState(false);
    const [isSidebarOpenNotif, setIsSidebarOpenNotif] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');


    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
        setIsSidebarOpenCart(false);
        setIsSidebarOpenNotif(false);
    };

    const handleToggleSidebarNotif = () => {
        setIsSidebarOpenNotif((prev) => !prev);
        setIsSidebarOpenCart(false);
        setIsSidebarOpen(false);
    };

    const handleToggleSidebarCart = () => {
        setIsSidebarOpenCart((prev) => !prev);
        setIsSidebarOpenNotif(false);
        setIsSidebarOpen(false);
    };

    // const handleOutsideClick = () => {
    //     setIsSidebarOpen(false);
    //     setIsSidebarOpenCart(false);
    //     setIsSidebarOpenNotif(false);
    // };

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const scrollY = window.scrollY;
            setIsNavbarVisible(scrollY <= lastScrollY || scrollY < 1);
            setLastScrollY(scrollY);
        }
    };

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            alert('Please enter a search term.');
            return;
        }
        console.log(`Searching for: ${searchQuery}`);
        window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },);

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

            {/* search */}
            <div className="flex items-center border border-green-500 rounded-lg p-2 shadow-md w-full max-w-sm">
                <button
                    onClick={handleSearch}
                    className="text-gray-500 hover:text-black transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 4a7 7 0 100 14 7 7 0 000-14zm10 10l-4-4"
                        />
                    </svg>
                </button>
                <input
                    type="text"
                    className="flex-grow outline-none px-2"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition"
                >
                    Search
                </button>
            </div>

            {/* lonceng */}
            <div className="">
                <button
                    className='text-black px-2'
                    onClick={handleToggleSidebarNotif}
                >
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

                {/* cart */}
                <button
                    className="text-black px-2"
                    onClick={handleToggleSidebarCart}
                >
                    <svg
                        className="h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    >
                        <path d="M4 4h2l1.5 12h11L21 8H6" />
                        <circle cx="9" cy="19" r="1.5" />
                        <circle cx="17" cy="19" r="1.5" />
                        <path d="M2 2h3" />
                    </svg>
                </button>

                {/* acount */}
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

            {/* sidebar notif */}
            <div
                className={`sidebar fixed top-[83px] right-0 h-screen w-96 bg-white shadow-lg border-l transition-transform duration-300 ${isSidebarOpenNotif ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-4">
                    <h1 className="text-lg font-bold text-center">Notif is Empty</h1>
                    <hr className="border-dashed mt-2 font-bold" />
                </div>
            </div>

            {/* sidebar cart item */}
            <div
                className={`sidebar fixed top-[83px] right-0 h-screen w-96 bg-white shadow-lg border-l transition-transform duration-300 ${isSidebarOpenCart ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-4">
                    <h1 className="text-lg font-bold text-center">Cart is Empty</h1>
                    <hr className="border-dashed mt-2 font-bold" />
                </div>
            </div>

            {/* sidebar mobile icon / humberger menu */}
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
