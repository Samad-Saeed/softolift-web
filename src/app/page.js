"use client"
import Image from 'next/image';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import React from 'react';



export default function Home() {
  return (
    <div>
      <Navbar />

      <div style={{ margin: '5px' }}>
        <Hero />
      </div>

      <Footer />
    </div>
  );
}
