import React from 'react';
import PersonIcon from './utilities/person.svg';

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className="bg-black text-white flex flex-col">
      <footer className="bg-gray-900 text-gray-400 py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">


            <div className="flex flex-col items-center ">
              <h1 style={{ fontFamily: "Bahnschrift", padding: "20px", fontSize: "2.5rem" }}>
                <b>OC</b>
              </h1>
              <div className="flex items-center space-x-2">
              <img className='w-5 h-5' src={PersonIcon} alt="Person Icon" style={{ fill: 'white' }}/>    
                <span>Rtr. Karthik Venkatesh .U</span>
              </div>
              <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5" />
                <span>+91 734-887-6452</span>
              </div>
              <div className="flex items-center space-x-2">
              <img className='w-5 h-5' src={PersonIcon} alt="Person Icon" style={{ fill: 'white' }}/>
                <span>Rtr. Sujal Prakash Naidu </span>
              </div>
              <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5" />
                <span>+91 761-967-4868</span>
              </div>
              <div className="flex items-center space-x-2">
              <img className='w-5 h-5' src={PersonIcon} alt="Person Icon" style={{ fill: 'white' }}/>
                <span>Harsha Chigurupati </span>
              </div>
              <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5" />
                <span>+91 944-974-3975</span>
              </div>
              <div className="flex items-center space-x-2">
              <img className='w-5 h-5' src={PersonIcon} alt="Person Icon" style={{ fill: 'white' }}/>
                <span>Veeksha S </span>
              </div>
              <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5" />
                <span>+91 948-170-6781</span>
              </div>
              <div className="flex items-center space-x-2">
              <img className='w-5 h-5' src={PersonIcon} alt="Person Icon" style={{ fill: 'white' }}/>
                <span>Rtr. Arjun Duvvuri </span>
              </div>
              <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5" />
                <span>+91 636-233-4710</span>
              </div>
            </div>


            <div className="flex flex-col items-center">
              <h1 style={{ fontFamily: "Bahnschrift", padding: "20px", fontSize: "2.5rem" }}>
                <b>Delegate Affairs </b>
              </h1>
              <div className="flex items-center space-x-2">
              <img className='w-5 h-5' src={PersonIcon} alt="Person Icon" style={{ fill: 'white' }}/>
                <span>Rtr. Preetha D S </span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" />
                <span>+91 789-257-6338</span>
              </div>
              
              <div className="flex items-center space-x-2">
              <img className='w-5 h-5' src={PersonIcon} alt="Person Icon" style={{ fill: 'white' }}/>
                <span>Shushrut </span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" />
                <span>+91 776-091-7384</span>
              </div>
              
            </div>



            <div className="flex flex-col items-center">
              <h1 style={{ fontFamily: "Bahnschrift", padding: "20px", fontSize: "2.5rem" }}>
                <b>Finance </b>
              </h1>
              <div className="flex items-center space-x-2">
              <img className='w-5 h-5' src={PersonIcon} alt="Person Icon" style={{ fill: 'white' }}/>
                <span>Rtr. Vedanth Masala </span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" />
                <span>+91 990-087-2672</span>
              </div><div className="flex items-center space-x-2">

              <img className='w-5 h-5' src={PersonIcon} alt="Person Icon" style={{ fill: 'white' }}/>

                <span>Akshar Rao  </span>
                </div>
                <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" />
                <span>+91 636-193-0964</span>
                </div>
              
            </div>


        </div>
        <div className="mt-4 md:mt-0 space-x-4">
          <button className="text-gray-400 hover:text-gray-300" onClick={handleBackToTop}>
            Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default Footer;
