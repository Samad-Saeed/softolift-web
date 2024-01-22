import { useState } from 'react';
import { useEffect } from 'react';


const Contact = () => {


    useEffect(() => {
        // Add the 'no-scroll' class to the body when the component mounts
        document.body.classList.add('no-scroll');
    
        // Remove the 'no-scroll' class from the body when the component unmounts
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, []);


  return (
    <div className="flex flex-col">
        <div className='text-left'>
            <h1 className="text-xl font-bold ml-6 mt-16">Contact SoftoLift Now..!</h1>
            <p className='ml-6 pt-7'> If you have inquiries or would like to explore more about the services we offer, feel free to get in touch. You can contact us through the provided contact form or directly using the email or phone number provided. Our team of professionals is committed to delivering outstanding service and assistance. We eagerly anticipate hearing from you. <br></br>Thank you for considering our company for your design and development requirements!</p>
        </div>

        <div className="form mt-6 ml-6">
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="John Doe" />
                </div>
                <div className="w-full px-3 mt-6">
                  <label className="block uppercase tracking-wide text-g0 text-white font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="johndoe@example.com" />
                </div>
                <div className="w-full px-3 mt-6">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-48 resize-none" id="message" placeholder="Enter your message..."></textarea>
                </div>
                <div className="w-full px-3 mt-6">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Send
                  </button>
                </div>
              </div>
            </form>
              <div class="border-t border-gray-300 my-5"></div>
          </div>





    
    </div>
  );
};

export default Contact;