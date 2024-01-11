'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`body-font ${isScrolled ? 'blur-bg' : ''} sticky top-0 transition duration-150 ease-in-out z-50`} style={{ color: '#FFF' }}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center   mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span href="/" className="ml-3 text-4xl font-bold">SoftoLift</span>
                </Link>
                <div className="md:hidden ml-auto">
                    <button className="  focus:outline-none fixed top-0 right-0 mr-5 mt-8" onClick={toggleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <nav className={`md:ml-auto flex flex-wrap items-center font-bold text-2xl justify-center ${isMobileMenuOpen ? 'hidden' : ''} md:block`}>
                    {
                        !isMobileMenuOpen && (
                        <>
                        <Link href="/" className="mr-5 transition delay-75 duration-150 ease-in-out  hover-text ">Services</Link>
                        <Link href="/" className="mr-5 transition delay-75 duration-150 ease-in-out  hover-text ">About Us</Link>
                        <Link href="/" className="mr-5 transition delay-75 duration-150 ease-in-out  hover-text ">Contact Us</Link>
                        </>
                        )
                    }
                </nav>
                {isMobileMenuOpen && (
                    <div className="md:hidden flex flex-col   items-center text-xl">
                        <Link href="/" className="my-2 transition delay-75 duration-150 ease-in-out  hover-text  ">Services</Link>
                        <Link href="/" className="my-2 transition delay-75 duration-150 ease-in-out  hover-text  ">About Us</Link>
                        <Link href="/" className="my-2 transition delay-75 duration-150 ease-in-out  hover-text  ">Contact Us</Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
