// import { useState } from 'react';
// import { useEffect } from 'react';


// const Contact = () => {


//   return (
//     <div className="contactForm grid md:grid-cols-2 gap-4 " style={{height:'100vh' ,maxWidth: '1500px', margin:'0 auto'}}>
//         <div className='text-left md:mt-12'>
//             <h1 className="text-3xl font-bold ml-6 mt-16 md:text-6xl">Contact SoftoLift Now..!</h1>
//             <p className='ml-6 pt-7 md:text-xl'> If you have inquiries or would like to explore more about the services we offer, feel free to get in touch. You can contact us through the provided contact form or directly using the email or phone number provided. Our team of professionals is committed to delivering outstanding service and assistance. We eagerly anticipate hearing from you. <br></br>Thank you for considering our company for your design and development requirements!</p>
//         </div>

//         <div className="form mt-16 ml-6">
//             <form className="w-full item-center max-w-lg md:mt-12 ">
//               <div className="-mx-3 mb-6">
//                 <div className="w-full px-3">
//                   <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
//                     Full Name
//                   </label>
//                   <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="John Doe" />
//                 </div>
//                 <div className="w-full px-3 mt-6">
//                   <label className="block uppercase tracking-wide text-g0 text-white font-bold mb-2" htmlFor="email">
//                     Email
//                   </label>
//                   <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="johndoe@example.com" />
//                 </div>
//                 <div className="w-full px-3 mt-6">
//                   <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
//                     Message
//                   </label>
//                   <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-48 resize-none" id="message" placeholder="Enter your message..."></textarea>
//                 </div>
//                 <div className="w-full px-3 mt-6">
//                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//                     Send
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>

//           <div className='mt-6 ml-6 mb-6'>
//             <div class="border-t border-gray-300 my-8"></div>
//             <h1 className='text-xl font-bold mb-4'> Whats Next</h1>
//             <p>Upon receiving your message, we'll schedule a Zoom call to explore your project needs and how we can provide assistance. This initial call typically leads to a more in-depth conversation which will ultimately result in the development of a customized proposal for you.</p>
//           </div>

//           <div className='mt-6 ml-6 mb-6'>
//               <div class="border-t border-gray-300 my-8"></div>
//               <h1 className='text-xl font-bold mb-4'>Social</h1>
//               <div className="flex items-center">
//                         <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 12">
//                           <path d="M14.05 0.12207H1.05005C0.773486 0.12207 0.550049 0.345508 0.550049 0.62207V10.6221C0.550049 10.8986 0.773486 11.1221 1.05005 11.1221H14.05C14.3266 11.1221 14.55 10.8986 14.55 10.6221V0.62207C14.55 0.345508 14.3266 0.12207 14.05 0.12207ZM12.5735 1.24863L7.55005 5.15332L2.52661 1.24863H12.5735ZM13.425 1.85332V9.99707H1.67505V1.85332L1.2438 1.51738L1.67349 1.85176L7.01099 6.00176C7.16448 6.12101 7.35333 6.18574 7.54771 6.18574C7.74208 6.18574 7.93093 6.12101 8.08442 6.00176L13.425 1.85332L13.8563 1.51738L13.2422 0.72832H13.2438L13.8579 1.51738L13.425 1.85332Z"/>
//                         </svg> 
//                         softoLift@gmail.com
//                       </div>

//                       <div className="flex items-center">
//                         <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 17">
//                           <path d="M12.1482 10.3868C11.9535 10.2868 10.9839 9.81177 10.8035 9.74749C10.6232 9.67963 10.491 9.64749 10.3607 9.84749C10.2285 10.0457 9.85354 10.4868 9.73569 10.6207C9.6214 10.7528 9.50533 10.7689 9.31069 10.6707C8.15354 10.0921 7.39461 9.63856 6.63211 8.32963C6.43033 7.98142 6.8339 8.00642 7.21069 7.25463C7.27497 7.12249 7.24283 7.00999 7.19283 6.90999C7.14283 6.80999 6.74997 5.84213 6.58569 5.44749C6.42676 5.06356 6.26247 5.11713 6.14283 5.10999C6.02854 5.10284 5.89819 5.10284 5.76604 5.10284C5.6339 5.10284 5.4214 5.15284 5.24104 5.34749C5.06069 5.5457 4.55176 6.02249 4.55176 6.99034C4.55176 7.9582 5.25711 8.8957 5.35354 9.02784C5.45354 9.15999 6.74104 11.1457 8.71783 12.0011C9.96783 12.5403 10.4571 12.5868 11.0821 12.4939C11.4625 12.4368 12.2464 12.0189 12.4089 11.5564C12.5714 11.0957 12.5714 10.7011 12.5232 10.6189C12.475 10.5314 12.3428 10.4814 12.1482 10.3868Z"/>
//                           <path d="M15.9285 5.71714C15.5249 4.75821 14.9463 3.8975 14.2088 3.15821C13.4765 2.4232 12.6071 1.83896 11.6499 1.43857C10.6678 1.02607 9.62491 0.817139 8.54991 0.817139H8.51419C7.43205 0.822496 6.38384 1.03678 5.39812 1.45821C4.44912 1.86271 3.58788 2.44799 2.86241 3.18142C2.13205 3.91892 1.55883 4.77607 1.16241 5.73142C0.751692 6.72071 0.544549 7.7725 0.549906 8.85464C0.555965 10.0948 0.849356 11.3166 1.40705 12.4243V15.1386C1.40705 15.3564 1.49359 15.5654 1.64764 15.7194C1.80169 15.8735 2.01062 15.96 2.22848 15.96H4.94455C6.05222 16.5177 7.27407 16.8111 8.51419 16.8171H8.55169C9.62134 16.8171 10.6588 16.61 11.6356 16.2046C12.588 15.809 13.4541 15.2316 14.1856 14.5046C14.9231 13.7743 15.5035 12.9207 15.9088 11.9689C16.3303 10.9832 16.5446 9.935 16.5499 8.85285C16.5553 7.76535 16.3446 6.71 15.9285 5.71714ZM13.2303 13.5386C11.9785 14.7779 10.3178 15.46 8.54991 15.46H8.51955C7.44276 15.4546 6.37312 15.1868 5.42848 14.6832L5.27848 14.6029H2.76419V12.0886L2.68384 11.9386C2.18026 10.9939 1.91241 9.92428 1.90705 8.8475C1.89991 7.06714 2.58026 5.39571 3.82848 4.13678C5.07491 2.87785 6.74098 2.18142 8.52134 2.17428H8.55169C9.44455 2.17428 10.3106 2.3475 11.1267 2.69035C11.9231 3.02428 12.6374 3.50464 13.2517 4.11892C13.8642 4.73142 14.3463 5.4475 14.6803 6.24392C15.0267 7.06892 15.1999 7.94392 15.1963 8.8475C15.1856 10.6261 14.4874 12.2921 13.2303 13.5386Z"/>
//                         </svg> 
//                         0300-1234567
//                       </div>
//             </div>





    
//     </div>
//   );
// };

// export default Contact;


import { useState } from 'react';

const Contact = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden scroll-lock bg-black bg-opacity-75">
      <div className="contactForm grid md:grid-cols-2 gap-4 bg-black rounded-lg" style={{ maxWidth: '100%', height:'100vh', margin: '0 auto' }}>
        <div className='text-left md:mt-12'>
          <button onClick={onClose} className="absolute top-4 right-4 text-black text-2xl">&times;</button>
          <h1 className="text-3xl font-bold ml-6 mt-16 md:text-6xl">Contact SoftoLift Now..!</h1>
          <p className='ml-6 pt-7 md:text-xl'>
            If you have inquiries or would like to explore more about the services we offer, feel free to get in touch. You can contact us through the provided contact form or directly using the email or phone number provided. Our team of professionals is committed to delivering outstanding service and assistance. We eagerly anticipate hearing from you.
            <br />
            Thank you for considering our company for your design and development requirements!
          </p>
        </div>
        <div className="form mt-16 ml-6">
          <form className="w-full item-center max-w-lg md:mt-12">
            <div className="-mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="w-full px-3 mt-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="johndoe@example.com" />
              </div>
              <div className="w-full px-3 mt-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
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
        </div>
        <div className='mt-6 ml-6 mb-6'>
          <div className="border-t border-gray-300 my-8"></div>
          <h1 className='text-xl font-bold mb-4'> What's Next</h1>
          <p>Upon receiving your message, we'll schedule a Zoom call to explore your project needs and how we can provide assistance. This initial call typically leads to a more in-depth conversation which will ultimately result in the development of a customized proposal for you.</p>
        </div>
        <div className='mt-6 ml-6 mb-6'>
          <div className="border-t border-gray-300 my-8"></div>
          <h1 className='text-xl font-bold mb-4'>Social</h1>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 12">
              <path d="M14.05 0.12207H1.05005C0.773486 0.12207 0.550049 0.345508 0.550049 0.62207V10.6221C0.550049 10.8986 0.773486 11.1221 1.05005 11.1221H14.05C14.3266 11.1221 14.55 10.8986 14.55 10.6221V0.62207C14.55 0.345508 14.3266 0.12207 14.05 0.12207ZM12.5735 1.24863L7.55005 5.15332L2.52661 1.24863H12.5735ZM13.425 1.85332V9.99707H1.67505V1.85332L1.2438 1.51738L1.67349 1.85176L7.01099 6.00176C7.16448 6.12101 7.35333 6.18574 7.54771 6.18574C7.74208 6.18574 7.93093 6.12101 8.08442 6.00176L13.425 1.85332L13.8563 1.51738L13.2422 0.72832H13.2438L13.8579 1.51738L13.425 1.85332Z"/>
            </svg> 
            softoLift@gmail.com
          </div>
          <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 17">
                </svg> 
              0300-1234567
            </div>
            </div>
    </div>
    </div>
  );
};

export default Contact;