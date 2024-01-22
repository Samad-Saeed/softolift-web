import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
      <div className=''>
          <section className='flex flex-col items-center justify-center'>
              <h1 className="title md:text-6xl" style={{ color: '#eceeed', fontFamily: 'Orbitron, sans-serif' }}>Your Digital Partner</h1>
              <p className="desc md:text-2xl" style={{ color: '#99a29e', fontFamily: 'sans-serif' }} >We believe that technology should work for you, not against you. That's why we create software solutions that empower you to take your business to the next level.</p>
          </section>


        <div className="project">
          {/* box 1 */}
          <div className="box flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/pic.webp" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{ color: '#eceeed', fontFamily: 'Orbitron, sans-serif' }}>Hello to the future</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>
          {/* box 2 */}
          <div className="box box1 flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/pic.webp" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{ color: '#eceeed', fontFamily: 'Orbitron, sans-serif' }}>Hello to the future</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>

          
          {/* box 3 */}

          <div className="box box2 flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/pic.webp" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{ color: '#eceeed', fontFamily: 'Orbitron, sans-serif' }}>Hello to the future</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>

          {/* box 4 */}     
          <div className="box box3 flex flex-col md:flex-row gap-5">
            <div className="picture items-center justify-center md:w-2/3">
              <img src="/images/pic.webp" alt="1" className="w-96 md:w-full h-36 md:h-64" />
            </div>
            <div className="content md:w-1/2 flex flex-col justify-center">
              <h1 className='text-xl md:text-4xl font-bold' style={{ color: '#eceeed', fontFamily: 'Orbitron, sans-serif' }}>Hello to the future</h1>
              <p className='text-white mt-4' style={{ color: '#99a29e', fontFamily: '' }}>In publishing and graphic design, Lorem ipsum is In publishing and graphic design, Lorem ipsum is</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero;