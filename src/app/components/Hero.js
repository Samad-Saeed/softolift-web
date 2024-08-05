import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect'
import CountUp from 'react-countup';
import Main from './Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
    return (

      
      <div className='hero</div>-section'>
        <div className='overflow-auto' style={{ height: '100vh', background: 'linear-gradient(180deg, white, #f9aa43)'}}>
          <div className='grid mb-10 grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row items-start justify-center'>
              <div className="typewriter-container pl-5 " style={{ maxWidth: '1000px' }}>
                <div className="type-writer" style={{ color: '#FF5733', fontFamily: 'Orbitron, sans-serif' }}>
                  <h1 className="text-3xl pt-20 md:pt-72  md:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Empowering The World Through Code</h1>
                  <div className="font-bold text-grey text-3xl md:text-6xl">
                    <Typewriter
                      options={{
                        strings: ['Innovate', 'Elevate', 'Dominate'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
                <button className='rounded-full mt-10 h-6 w-32 items-center justify-center' style={{ color: '#FFFFFF', backgroundColor: '#FF5733', fontFamily: 'nato' }}>
                  <Link href="/contact">Get Started</Link>
                </button>
              </div>
          </div>


          <div className="counters-container mt-32 flex flex-col md:flex-row  items-center justify-center md:space-x-32 space-y-8 md:space-y-0" style={{ fontFamily: 'Orbitron, sans-serif', color: '#ffffff' }}>
            
            <div className="counter rounded-2xl p-6 flex flex-col items-center">
              <p className="text-2xl text-black">No. of Clients</p>
              <CountUp className="text-3xl md:text-7xl" start={0} end={100} duration={4} />
            </div>
            
            <div className="counter rounded-2xl p-6 flex flex-col items-center">
              <FontAwesomeIcon className='text-orange-500' icon={faListCheck} size='3x'/>
              <CountUp className="pt-4 text-3xl md:text-7xl" start={0} end={200} duration={4} />
              <p className="text-2xl text-orange-500">No. of Clients</p>
            </div>
            
            <div className="counter  rounded-2xl p-6 flex flex-col items-center">
              <p className="text-2xl text-black">Counter 3</p>
              <CountUp className="text-3xl md:text-7xl" start={0} end={300} duration={4} />
            </div>
            
          </div>


        </div>

          <section id='projects' className='flex flex-col items-center justify-center'>
              <h1 className="text-4xl font-bold mt-10 md:text-6xl" style={{ color: '#FF5733', fontFamily: 'Orbitron, sans-serif' }}>Your Digital Partner</h1>
              <p className="desc p-6 md:text-2xl text-center" style={{ color: '#212121', fontFamily: 'sans-serif' }} >We believe that technology should work for you, not against you. That's why we create software solutions that empower you to take your business to the next level.</p>
          </section>


        <div className="project">
          {/* box 1 */}
          <div className="box flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/liquidswap.svg" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{ fontFamily: 'Orbitron, sans-serif' }}>Sky Scanner Bot</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>The tools build to revolutionlize the way we travel and book flights</p>
            </div>
          </div> 
          {/* box 2 */}
          <div className="box box1 flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/vlaunch.svg" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{fontFamily: 'Orbitron, sans-serif' }}>Vlaunch</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>

          
          {/* box 3 */}

          <div className="box box2 flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/melon.svg" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{fontFamily: 'Orbitron, sans-serif' }}>Melon Box</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>

          {/* box 4 */}     
          <div className="box box3 flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/clipping.svg" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{fontFamily: 'Orbitron, sans-serif' }}>Clipping Paltform</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Hero;