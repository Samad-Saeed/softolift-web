"use client"
import Image from 'next/image';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import React from 'react';




export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{background: ''}}>
        <Hero />
      </div>


      <div style={{backgroundColor:'#e3e3e3'}}>
        <About />
      </div>
    
      <Footer />
    </div>
  );
}
