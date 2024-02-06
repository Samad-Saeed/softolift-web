import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect'
import Main from './Main';


const Hero = () => {
    return (

      
      <div className='hero-section'>





        


             
            <div className='grid pt-28 mb-10 grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row items-center justify-between' style={{ height: 'vh', backgroundColor: ''}}>
              <div className="typewriter-container pl-5 md:pl-60 md:w-3/4"style={{ maxWidth: '1000px'}}>
                <div className="type-writer" style={{color: '#FF5733', fontFamily: 'Orbitron, sans-serif' }}>
                  <h1 className="text-3xl md:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Empowering The World Through Code</h1>
                  <div className="font-bold text-3xl md:text-5xl">
                    <Typewriter
                      options={{
                        strings: ['Innovate', 'Elevate', 'Dominate'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
                <button className='rounded-full mt-16 h-8 w-32 items-center justify-center ' style={{color: '#FFFFFF', backgroundColor: '#FF5733', fontFamily: 'nato' }}>
                  <Link href="/">Get Started</Link>
                </button>
              </div>

              <div className='pl-20 md:pl-0 md:w-3/4' style={{maxWidth: '800px'}}>
                <Main></Main>
              </div>
            </div>

          

          

          <section className='flex flex-col items-center justify-center'>
              <h1 className="text-4xl font-bold mt-10 md:text-6xl" style={{ color: '#FF5733', fontFamily: 'Orbitron, sans-serif' }}>Your Digital Partner</h1>
              <p className="desc p-6 md:text-2xl" style={{ color: '#212121', fontFamily: 'sans-serif' }} >We believe that technology should work for you, not against you. That's why we create software solutions that empower you to take your business to the next level.</p>
          </section>


        <div className="project">
          {/* box 1 */}
          <div className="box flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/pic.webp" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{ fontFamily: 'Orbitron, sans-serif' }}>Hello to the future</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>
          {/* box 2 */}
          <div className="box box1 flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/pic.webp" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{fontFamily: 'Orbitron, sans-serif' }}>Hello to the future</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>

          
          {/* box 3 */}

          <div className="box box2 flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/pic.webp" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{fontFamily: 'Orbitron, sans-serif' }}>Hello to the future</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>

          {/* box 4 */}     
          <div className="box box3 flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/pic.webp" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{fontFamily: 'Orbitron, sans-serif' }}>Hello to the future</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero;