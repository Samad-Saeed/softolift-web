const Hero = () => {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
          <section className='flex flex-col items-center justify-center'>
              <h1 className="title">Your Digital Partner</h1>
              <p className="desc">We think that rather than being against you, technology should serve you. For this reason, we develop software solutions that enable you to grow your company.</p>
          </section>

          <div>
          <section className=" ">
            <h2 className="text-center font-bold text-3xl md:text-7xl text-black font-sans">Your Digital Partner</h2>
            <br />
            <br />
            <p className="text-center  text-black font-sans md:text-2xl p-12">Mauris donec ociis diam magnis sapien sagittis sapien tempor volute gravida and aliquet tortor undo aliquet quaerat
            </p>
          </section>
      </div>

          <div className="project">
            <div className="box">Box 1</div>
            <div className="box">Box 2</div>
            <div className="box">Box 3</div>
            <div className="box">Box 4</div>
        </div>
      </div>
    )
}

export default Hero;