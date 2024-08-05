'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Contact from './Contact';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);
    const [isContactFormOpen, setContactFormOpen] = useState(false);

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

    const openContactForm = () => {
        setContactFormOpen(true);
    };

    const closeContactForm = () => {
        setContactFormOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`body-font ${isScrolled ? 'blur-bg' : ''} sticky top-0 transition duration-150 ease-in-out z-50`} style={{ color: '#FF5733'}}>
            <div className="container flex flex-col md:flex-row" style={{maxWidth:'1200px', fontFamily: 'Orbitron, sans-serif'}}>
                <Link href="/" className={`flex title-font font-medium items-center md:mb-0 ${isMobileMenuOpen ? '' : ''}`}>
                    <img src="/images/icon.png" alt="Image" className="w-20 h-20" />
                    <span href="/" className={`text-4xl font-bold ${isMobileMenuOpen ? 'justify-start' : ''}`}>SoftoLift</span>
                </Link>
                <div className="md:hidden ml-auto">
                    <button className="focus:outline-none fixed top-0 right-0 mr-5 mt-8" onClick={toggleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <nav className={`md:m-auto font-bold text-xl  ${isMobileMenuOpen ? 'hidden' : ''} md:block`} style={{position: 'fixed', top: 20, right: 100 , fontFamily: 'Orbitron, sans-serif'}} >
                    {
                        !isMobileMenuOpen && (
                        <>
                        <Link href="#projects" className="mr-5 transition delay-75 duration-150 ease-in-out hover-text ">Projects</Link>
                        <Link href="#services" className="mr-5 transition delay-75 duration-150 ease-in-out hover-text ">Services</Link>
                        <Link href="#aboutus" className="mr-5 transition delay-75 duration-150 ease-in-out hover-text ">About Us</Link>
                        <Link href="/contact" className="mr-5 transition delay-75 duration-150 ease-in-out hover-text ">Contact Us</Link>
                        {/* <button onClick={openContactForm} className="my-2 transition delay-75 duration-150 ease-in-out hover-text ">Contact Us</button> */}
                        </>
                        )
                    }
                </nav>
                {isMobileMenuOpen && (
                    <div className="flex flex-col items-center justify-center text-xl" style={{}}>
                        <Link href="/" className="my-2 transition delay-75 duration-150 ease-in-out hover-text ">Services</Link>
                        <Link href="/" className="my-2 transition delay-75 duration-150 ease-in-out hover-text ">About Us</Link>
                        {/* <button onClick={openContactForm} className="my-2 transition delay-75 duration-150 ease-in-out hover-text ">Contact Us</button> */}
                    </div>
                )}
            </div>
            {/* {isContactFormOpen && <Contact onClose={closeContactForm} />} */}
        </header>
    );
};

export default Navbar;
