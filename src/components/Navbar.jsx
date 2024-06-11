// import { useState } from "react";
// import logo from "../assets/images/LOGO.svg"
// import hamburger from "../assets/images/Frame 60.svg"
// import close from "../assets/images/Close.svg"
// import whitePattern from "../assets/images/white-pattern.png"

// function Navbar() {
//     const [navbar, setNavbar] = useState(false);
//     return (
//         <nav className="md:flex items-center justify-between m-6 md:m-14">
//             <header><img src={logo} alt="logo" /></header>
//             <div className="md:flex items-center justify-center">
//                 {/* HAMBURGER BUTTON FOR MOBILE */}
//               <div className="md:hidden">
//                 <button
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <img src={close} width={30} height={30} alt="logo" />
//                   ) : (
//                     <img
//                       src={hamburger}
//                       width={30}
//                       height={30}
//                       alt="logo"
//                       className="focus:border-none active:border-none"
//                     />
//                   )}
//                   </button>
//                 </div>
//                 <ul className="md:flex gap-8">
//                     <li><a className="font-saeada-light block text-[#525252]" href="">Home</a></li>
//                     <li><a className="font-saeada-light block text-[#525252]" href="">About Us</a></li>
//                     <li><a className="font-saeada-light block text-[#525252]" href="">Activities</a></li>
//                     <li><a className="font-saeada-light block text-[#525252]" href="">Partner With Us</a></li>
//                     <li><a className="font-saeada-light block text-[#525252]" href="">Contact Us</a></li>
//                 </ul>

//                 <button className="relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[20px] w-[150px] md:ml-6 font-saeada-light">
//                     <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
//                     <p>Join Community</p>
//                 </button>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;

// import { useState } from "react";
// import logo from "../assets/images/LOGO.svg"
// import hamburger from "../assets/images/Frame 60.svg"
// import close from "../assets/images/Close.svg"
// import whitePattern from "../assets/images/white-pattern.png"

// function Navbar() {
//     const [navbar, setNavbar] = useState(false);

//     return (
//         <nav className="md:flex items-center justify-between m-6 md:m-14">
//             <header><img src={logo} alt="logo" /></header>
//             <div className="md:flex items-center justify-center w-full">
//                 {/* HAMBURGER BUTTON FOR MOBILE */}
//                 <div className="md:hidden">
//                     <button
//                         className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                         onClick={() => setNavbar(!navbar)}
//                     >
//                         {navbar ? (
//                             <img src={close} width={30} height={30} alt="close" />
//                         ) : (
//                             <img
//                                 src={hamburger}
//                                 width={30}
//                                 height={30}
//                                 alt="hamburger"
//                                 className="focus:border-none active:border-none"
//                             />
//                         )}
//                     </button>
//                 </div>
//                 {/* NAVIGATION LINKS */}
//                 <ul className={`md:flex gap-8 ${navbar ? "block" : "hidden"}`}>
//                     <li><a className="font-saeada-light block text-[#525252]" href="">Home</a></li>
//                     <li><a className="font-saeada-light block text-[#525252]" href="">About Us</a></li>
//                     <li><a className="font-saeada-light block text-[#525252]" href="">Activities</a></li>
//                     <li><a className="font-saeada-light block text-[#525252]" href="">Partner With Us</a></li>
//                     <li><a className="font-saeada-light block text-[#525252]" href="">Contact Us</a></li>
//                 </ul>
//                 <button className="relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[20px] w-[150px] md:ml-6 font-saeada-light">
//                     <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
//                     <p>Join Community</p>
//                 </button>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;

// import { useState } from "react";
// import logo from "../assets/images/LOGO.svg"
// import hamburger from "../assets/images/Frame 60.svg"
// import close from "../assets/images/Close.svg"
// import whitePattern from "../assets/images/white-pattern.png"

// function Navbar() {
//     const [navbar, setNavbar] = useState(false);

//     return (
//         <nav className="md:flex items-center justify-between m-6 md:m-14">
//             <div className="flex items-center justify-between w-full">
//                 <header><img src={logo} alt="logo" /></header>
//                 <div className="md:hidden">
//                     <button
//                         className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                         onClick={() => setNavbar(!navbar)}
//                     >
//                         {navbar ? (
//                             <img src={close} width={30} height={30} alt="close" />
//                         ) : (
//                             <img
//                                 src={hamburger}
//                                 width={30}
//                                 height={30}
//                                 alt="hamburger"
//                                 className="focus:border-none active:border-none"
//                             />
//                         )}
//                     </button>
//                 </div>
//             </div>
//             <ul className={`md:flex gap-8 ${navbar ? "block" : "hidden"}`}>
//                 <li><a className="font-saeada-light block text-[#525252]" href="">Home</a></li>
//                 <li><a className="font-saeada-light block text-[#525252]" href="">About Us</a></li>
//                 <li><a className="font-saeada-light block text-[#525252]" href="">Activities</a></li>
//                 <li><a className="font-saeada-light block text-[#525252]" href="">Partner With Us</a></li>
//                 <li><a className="font-saeada-light block text-[#525252]" href="">Contact Us</a></li>
//             </ul>
//             <button className="relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[20px] w-[150px] md:ml-6 font-saeada-light">
//                 <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
//                 <p>Join Community</p>
//             </button>
//         </nav>
//     )
// }

// export default Navbar;

import { useState } from "react";
import logo from "../assets/images/new-logo.svg"
import hamburger from "../assets/images/Frame 60.svg"
import close from "../assets/images/Close.svg"
import whitePattern from "../assets/images/white-pattern.png"
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    return (
        <nav className="lg:flex items-center justify-between m-6 md:m-14 relative">
            <div className="flex items-center justify-between w-full">
                <Link to="/prime-time-pal/">
                    <header><img src={logo} alt="logo" /></header>
                </Link>
                <div className="hidden lg:flex md:justify-center lg:items-center">
                  <ul className="md:flex gap-8">
                    <li><Link className={`font-saeada-light block ${location.pathname === '/' ? 'text-[#FF4D0A]' : 'text-[#525252]'}`} to="/">Home</Link></li>
                    <li><Link className={`font-saeada-light block ${location.pathname === '/about-us' ? 'text-[#FF4D0A]' : 'text-[#525252]'}`} to="/about-us">About Us</Link></li>
                    <li><Link className={`font-saeada-light block ${location.pathname === '/activities' ? 'text-[#FF4D0A]' : 'text-[#525252]'}`} to="/activities">Activities</Link></li>
                    <li><Link className={`font-saeada-light block ${location.pathname === '/partner' ? 'text-[#FF4D0A]' : 'text-[#525252]'}`} to="/partner">Partner With Us</Link></li>
                    <li><Link className={`font-saeada-light block ${location.pathname === '/contact' ? 'text-[#FF4D0A]' : 'text-[#525252]'}`} to="/contact">Contact Us</Link></li>
                  </ul>
                  <Link to="/registration/">
                    <button className="relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[150px] lg:ml-6 font-saeada-light">
                        <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                        <p>Join Community</p>
                    </button>
                  </Link>
                </div>
                <div className="lg:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <img src={close} width={30} height={30} alt="close" />
                        ) : (
                            <img
                                src={hamburger}
                                width={30}
                                height={30}
                                alt="hamburger"
                                className="focus:border-none active:border-none"
                            />
                        )}
                    </button>
                </div>
            </div>
            {navbar && (
                <div className="fixed lg:hidden top-0 left-0 w-full h-full text-center  bg-white bg-opacity-100 z-50">
                    <button
                        className="absolute top-0 right-0 m-4 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(false)}
                    >
                        <img src={close} width={30} height={30} alt="close" />
                    </button>
                    <ul className="lg:flex gap-8 mt-8">
                        <li className="mb-8"><Link className={`font-saeada-light block ${location.pathname === '/' ? 'text-[#FF4D0A]' : 'text-[#525252]'}`} to="/">Home</Link></li>
                        <li className="mb-8"><Link className={`font-saeada-light block ${location.pathname === '/about-us' ? 'text-[#FF4D0A]' : 'text-[#525252]'}`} to="/about-us">About Us</Link></li>
                        <li className="mb-8"><Link className={`font-saeada-light block ${location.pathname === '/activities' ? 'text-[#FF4D0A]' : 'text-[#525252]'}`} to="/activities">Activities</Link></li>
                        <li className="mb-8"><Link className={`font-saeada-light block ${location.pathname === '/partner' ? 'text-[#FF4D0A]' : 'text-[#525252]'}`} to="/partner">Partner With Us</Link></li>
                        <li className="mb-8"><Link className={`font-saeada-light block ${location.pathname === '/contact' ? 'text-[#FF4D0A]' : 'text-[#525252]'}`} to="/contact">Contact Us</Link></li>
                    </ul>
                    <div className="flex justify-center items-center">
                        <Link to="/contact/">
                            <button className="block text-center text-[#FF4D0A] border-[1.5px]  border-[#FF4D0A] h-[50px] rounded-[25px] w-[160px] font-saeada-regular">
                                
                                Become A Partner
                            </button>
                        </Link>
                    </div>
                    <Link to="/registration/">
                        <button className="relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[150px] mt-6 font-saeada-light">
                            <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                            <p>Join Community</p>
                        </button>
                    </Link>
                    
                </div>
            )}
        </nav>
    )
}

export default Navbar;



