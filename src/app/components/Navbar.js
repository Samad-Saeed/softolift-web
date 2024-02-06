'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Contact from './Contact';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

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

    useEffect(() => {
        if (isContactOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    
        // Cleanup function to reset the overflow property when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isContactOpen]);



    return (
        <header className={`body-font ${isScrolled ? 'blur-bg' : ''} sticky top-0 transition duration-150 ease-in-out z-50`} style={{ color: '#FF5733'}}>
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <Link href="/" className={`flex title-font font-medium items-center mb-4 md:mb-0 ${isMobileMenuOpen ? 'justify-center' : ''}`}>
                    <img src="/images/icon.png" alt="Image" className="w-20 h-20 rounded-full" />
                    <span href="/" className={`ml-3 text-4xl font-bold ${isMobileMenuOpen ? 'justify-center' : ''}`} style={{ fontFamily: 'Orbitron, sans-serif'}}>SoftoLift</span>
                </Link>
                <div className="md:hidden ml-auto">
                    <button className="focus:outline-none fixed top-0 right-0 mr-5 mt-8" onClick={toggleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <nav className={`md:m-auto justify-center flex items-center font-bold text-xl  ${isMobileMenuOpen ? 'hidden' : ''} md:block justify-center`} style={{ fontFamily: 'Orbitron, sans-serif'}} >
                    {
                        !isMobileMenuOpen && (
                        <>
                        <Link href="/" className="mr-5 transition delay-75 duration-150 ease-in-out hover-text ">Services</Link>
                        <Link href="/about" className="mr-5 transition delay-75 duration-150 ease-in-out hover-text ">About Us</Link>
                        <button onClick={() => setIsContactOpen(true)} className="mr-5 transition delay-75 duration-150 ease-in-out hover-text ">Contact Us</button>
                        </>
                        )
                    }
                </nav>
                {isContactOpen && (
                    <div style={{ position: 'fixed', top: 0, right: 0, width: '100%', height: '100%', backgroundColor: '#141817' }}>
                    <button className="float-right mr-5 mt-5  "onClick={() => setIsContactOpen(false)}>X</button>
                    <Contact />
                    </div>
                )}
                {isMobileMenuOpen && (
                    <div className="flex flex-col items-center text-xl" style={{maxWidth: '768px'}}>
                        <Link href="/" className="my-2 transition delay-75 duration-150 ease-in-out hover-text ">Services</Link>
                        <Link href="/about" className="my-2 transition delay-75 duration-150 ease-in-out hover-text ">About Us</Link>
                        <Link href="/" className="my-2 transition delay-75 duration-150 ease-in-out hover-text ">Contact Us</Link>
                    </div>
                )}
                {!isContactOpen && (
                    <button className="md:hidden focus:outline-none fixed top-0 right-0 mr-5 mt-8" style={{maxWidth: '768px'}} onClick={toggleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    )}
            </div>
        </header>
    );
};

export default Navbar;
