import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function about() {
    return (
        <div >
            <Navbar />
            {/* Mission Statement */}
            <div className="mission text-center md:mt-36 md:mx-auto md:w-4/6" style={{paddingLeft: '26px',paddingRight:'26px'}}>
                <h1 className="text-orange-400 text-center text-xl" style={{fontFamily:'orbitron'}}>Our Mission</h1>
                <h1 className="text-white font-bold text-xl text-center justify-between pr-5 pl-5 mt-5  md:text-7xl " style={{fontFamily:'orbitron', letterSpacing:'.20rem'}} >Bringing order to the digital world, one project at a time.</h1>
                <p className="text-white text-center pr-8 pl-8 mt-11 md:text-2xl">We embrace the chaos of the digital realm and turn it into organized brilliance. As a remote software development company, we thrive on challenges and excel in crafting innovative solutions.</p>
            </div>

            {/* Divider */}
            <div class="border-t border-gray-600 my-20"></div>

           
           
           
           
            {/* Our Services */}
            <div className="services"style={{paddingLeft: '26px',paddingRight:'26px'}}>
                <h1 className="text-white text-center font-bold text-2xl md:text-4xl mt-10" style={{ fontFamily: 'Orbitron, sans-serif',letterSpacing:'.20rem'}}>Services we Offer</h1>
                <div class="border-t border-gray-600 my-10"></div>



                <div className="md:mx-auto md:w-11/12">
                    <div className="service1 text-left grid lg:grid-cols-2 lg:gap-40">
                        <h1 className="text-white font-bold text-2xl md:text-5xl " style={{ fontFamily: 'Orbitron, sans-serif' }}>Web Development</h1>
                        <p className="text-white justify-between mt-5 md:text-2xl">We offer a wide range of web development services, from simple landing pages to complex web applications. We use the latest technologies to ensure that your website is fast, secure, and responsive.</p>
                    </div>
                        <div class="border-t border-gray-600 my-10"></div>

                    <div className="service2 text-left grid lg:grid-cols-2 lg:gap-40">
                        <h1 className="text-white font-bold text-2xl md:text-5xl  " style={{ fontFamily: 'Orbitron, sans-serif' }}>Mobile Development</h1>
                        <p className="text-white justify-between mt-5 md:text-2xl">We offer a wide range of web development services, from simple landing pages to complex web applications. We use the latest technologies to ensure that your website is fast, secure, and responsive.</p>
                    </div>
                        <div class="border-t border-gray-600 my-10"></div>

                    <div className="service3 text-left grid lg:grid-cols-2 lg:gap-40">
                        <h1 className="text-white font-bold text-2xl md:text-5xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>UI/UX Design</h1>
                        <p className="text-white justify-between mt-5 md:text-2xl ">We offer a wide range of web development services, from simple landing pages to complex web applications. We use the latest technologies to ensure that your website is fast, secure, and responsive.</p>
                    </div>
                        <div class="border-t border-gray-600 my-10"></div>

                    <div className="service4 text-left grid lg:grid-cols-2 lg:gap-40">
                        <h1 className="text-white font-bold text-2xl md:text-5xl " style={{ fontFamily: 'Orbitron, sans-serif' }}>SEO</h1>
                        <p className="text-white justify-between mt-5 md:text-2xl ">We offer a wide range of web development services, from simple landing pages to complex web applications. We use the latest technologies to ensure that your website is fast, secure, and responsive.</p>
                    </div>
                        <div class="border-t border-gray-600 my-10"></div>

                    <div className="service5 text-left grid lg:grid-cols-2 lg:gap-40">
                        <h1 className="text-white font-bold text-2xl md:text-5xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>Digital Marketing</h1>
                        <p className="text-white justify-between mt-5 md:text-2xl ">We offer a wide range of web development services, from simple landing pages to complex web applications. We use the latest technologies to ensure that your website is fast, secure, and responsive.</p>
                    </div>
                        <div class="border-t border-gray-600 my-10"></div>
                </div>
                

            </div>
            {/* Our Services End */}
            


            {/* our team */}
            <h1 className="text-center font-bold text-2xl md:text-4xl mt-20 mb-5" style={{ fontFamily: 'Orbitron, sans-serif', color: '#eceeed'}}>Meet our team.</h1>

            <div className="items-center justify-center grid lg:grid-cols-3" style={{maxWidth:'1100px', margin: '0 auto'}}>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl"style={{fontFamily:'orbitron, sans-serif', color: '#eceeed',letterSpacing:'.20rem'}}>Sammad Saeed</h2>
                        <p style={{fontFamily:'noto sans', color: '#99a29e'}}>Full Stack Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl"style={{fontFamily:'orbitron, sans-serif', color: '#eceeed'}}>Sammad Saeed</h2>
                        <p style={{fontFamily:'noto sans', color: '#99a29e'}}>Full Stack Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl"style={{fontFamily:'orbitron, sans-serif', color: '#eceeed'}}>Sammad Saeed</h2>
                        <p style={{fontFamily:'noto sans', color: '#99a29e'}}>Full Stack Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl"style={{fontFamily:'orbitron, sans-serif', color: '#eceeed'}}>Sammad Saeed</h2>
                        <p style={{fontFamily:'noto sans', color: '#99a29e'}}>Full Stack Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl"style={{fontFamily:'orbitron, sans-serif', color: '#eceeed'}}>Sammad Saeed</h2>
                        <p style={{fontFamily:'noto sans', color: '#99a29e'}}>Full Stack Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl"style={{fontFamily:'orbitron, sans-serif', color: '#eceeed'}}>Sammad Saeed</h2>
                        <p style={{fontFamily:'noto sans', color: '#99a29e'}}>Full Stack Developer</p>
                    </div>
                    <div className="team-section flex flex-col text-center">
                        <img src="/images/person.jpg" alt="Image 1" />
                        <h2 className="font-bold text-xl"style={{fontFamily:'orbitron, sans-serif', color: '#eceeed'}}>Sammad Saeed</h2>
                        <p style={{fontFamily:'noto sans', color: '#99a29e'}}>Full Stack Developer</p>
                    </div>
            </div>

            <Footer />

        </div>
    );
}