import Maps from './Map/Maps'

export default function about() {
    return (
        <div id='aboutus' className="text-center">
            {/* Mission Statement */}
            <div className="mission md:mt-36 md:mx-auto md:w-4/6" style={{paddingLeft: '26px',paddingRight:'26px'}}>
                <h1 className="text-orange-400 text-xl pt-10" style={{fontFamily:'orbitron'}}>Our Mission</h1>
                <h1 className="font-bold text-xl text-black justify-between pr-5 pl-5 mt-5 md:text-6xl" style={{fontFamily:'orbitron', letterSpacing:'.20rem'}}>Bringing order to the digital world, one project at a time.</h1>
                <p className="text-black pr-8 pl-8 mt-11 md:text-xl">We embrace the chaos of the digital realm and turn it into organized brilliance. As a remote software development company, we thrive on challenges and excel in crafting innovative solutions.</p>
            </div>

            {/* Divider */}
            <div className="border-t border-orange-900 my-32"></div>

            {/* Our Services */}
            <div id='services'className="services" style={{paddingLeft: '26px',paddingRight:'26px'}}></div>
           
           
            {/* Our Services */}
            <div className="services"style={{paddingLeft: '26px',paddingRight:'26px'}}>
                <h2 className="text-black text-center font-bold text-2xl md:text-4xl mt-10" style={{ fontFamily: 'Orbitron, sans-serif',letterSpacing:'.20rem'}}>Services we Offer</h2>
                <div class="border-t border-orange-900 my-16"></div>



                <div className="md:mx-auto md:w-11/12">
                    <div className="service1 text-left  grid lg:grid-cols-2 lg:gap-40">
                        <h1 className="text-orange-600 font-bold text-2xl md:text-4xl " style={{ fontFamily: 'Orbitron, sans-serif'  }}>Web Development</h1>
                        <p className="text-black items-center justify-between mt-5 md:text-xl">We offer a wide range of web development services, from simple landing pages to complex web applications. We use the latest technologies to ensure that your website is fast, secure, and responsive.</p>
                    </div>
                        <div class="border-t border-orange-900 my-16"></div>

                    <div className="service2 text-left grid lg:grid-cols-2 lg:gap-40">
                        <h1 className="text-black font-bold text-2xl md:text-4xl  " style={{ fontFamily: 'Orbitron, sans-serif' }}>Mobile Development</h1>
                        <p className="text-black justify-between mt-5 md:text-xl">We offer a wide range of web development services, from simple landing pages to complex web applications. We use the latest technologies to ensure that your website is fast, secure, and responsive.</p>
                    </div>
                        <div class="border-t border-orange-900 my-16"></div>

                    <div className="service3 text-left grid lg:grid-cols-2 lg:gap-40">
                        <h1 className="text-black font-bold text-2xl md:text-4xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>UI/UX Design</h1>
                        <p className="text-black justify-between mt-5 md:text-xl ">We offer a wide range of web development services, from simple landing pages to complex web applications. We use the latest technologies to ensure that your website is fast, secure, and responsive.</p>
                    </div>
                        <div class="border-t border-orange-900 my-16"></div>

                    <div className="service4 text-left grid lg:grid-cols-2 lg:gap-40">
                        <h1 className="text-black font-bold text-2xl md:text-4xl " style={{ fontFamily: 'Orbitron, sans-serif' }}>SEO</h1>
                        <p className="text-black justify-between mt-5 md:text-xl ">We offer a wide range of web development services, from simple landing pages to complex web applications. We use the latest technologies to ensure that your website is fast, secure, and responsive.</p>
                    </div>
                        <div class="border-t border-orange-900 my-16"></div>

                    <div className="service5 text-left grid lg:grid-cols-2 lg:gap-40">
                        <h1 className="text-black font-bold text-2xl md:text-4xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>Digital Marketing</h1>
                        <p className="text-black justify-between mt-5 md:text-xl ">We offer a wide range of web development services, from simple landing pages to complex web applications. We use the latest technologies to ensure that your website is fast, secure, and responsive.</p>
                    </div>
                        <div class="border-t border-orange-900 my-16"></div>
                </div>
                

            </div>
            {/* Our Services End */}


            <div class="known-for-section flex flex-col md:flex-row items-center justify-center">
                <h2>What we’re known for</h2>
                <div class="mobile-view"></div>
                <img alt="Figma" src="images/vue.svg" />
                <img alt="Figma" src="images/python.svg" />
                <img alt="Figma" src="images/figma.svg" />
                <img alt="NextJS" src="images/django.svg" />
                <img alt="VueJS" src="images/next.svg" />
                <img alt="Vercel" src="images/vercel.svg" />
            </div>


            


            {/* our team */}
            <h1 className="text-center font-bold text-2xl md:text-4xl mt-20 mb-20" style={{ fontFamily: 'Orbitron, sans-serif', color: '#FF5733'}}>Meet our team.</h1>

            <div className="items-center justify-center grid lg:grid-cols-3" style={{maxWidth:'1100px', margin: '0 auto'}}>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl" >Awais Tariq</h2>
                        <p   >Python AI Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl" >Abdullah Saeed</h2>
                        <p   >Automation Engineer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl" >Umer Farooq</h2>
                        <p   >Full Stack Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl" >Sammad Saeed</h2>
                        <p   >Full Stack Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl" >Muhammad Adnan</h2>
                        <p   >Forntend Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl" >Sammad Saeed</h2>
                        <p   >Full Stack Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl">Sammad Saeed</h2>
                        <p   >Full Stack Developer</p>
                    </div>
            </div>

            <div className='flex items-center justify-center mt-10 mb-10 overflow-auto' style={{}}>
                <Maps></Maps>
            </div>

        </div>
    );
}