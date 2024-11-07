import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Logo Section */}
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold italic text-black">Cihuy<span className="text-green-400">Shop</span>.</h1>
                        <p className="mt-2">Cihuy Shop will make you more Stylish.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row">
                        <div className="mr-10">
                            <h2 className="text-lg font-semibold">Quick Links</h2>
                            <ul className="mt-2">
                                <li><a href="#" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">Shop</a></li>
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Customer Service</h2>
                            <ul className="mt-2">
                                <li><a href="#" className="hover:underline">Help Center</a></li>
                                <li><a href="#" className="hover:underline">Returns</a></li>
                                <li><a href="#" className="hover:underline">Shipping Info</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact and Social Media */}
                <div className="mt-8 border-t border-gray-700 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-lg font-semibold">Contact Us</h2>
                            <p className="mt-2">Email: support@cihuyshop.com</p>
                            <p>Phone: +1 (234) 567-8901</p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-white">Facebook</a>
                            <a href="#" className="text-gray-600 hover:text-white">Twitter</a>
                            <a href="#" className="text-gray-600 hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} CihuyShop. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer