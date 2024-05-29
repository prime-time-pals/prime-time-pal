import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import whitePattern from "../assets/images/pattern-svg.svg";
import shape from "../assets/images/shape-sbg.svg"
import { Link } from "react-router-dom";

function Activities() {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <div className="my-[60px] mx-8 md:my-[120px] md:text-center text-left">
                <h2 className="text-[#0070FF] font-bold mb-4  text-[30px] font-saeada-regular">Exciting Activities Coming Your Way!</h2>
                <p className="text-[#4f4f4f] tracking-widest font-bold mb-12 font-saeada-thin">
                Stay tuned for snippets of the community events.

                    
                </p>
                <div className="flex justify-center items-center flex-col md:flex-row">
                    <Link to="/prime-time-pal/registration/">
                        <button className="relative mb-4 md:mb-0 text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[160px] font-saeada-light">
                            <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                            <p>Join Community</p>
                        </button>
                    </Link>
                    <Link to="/prime-time-pal/partner/">
                        <button className=" text-[#FF4D0A] border-[1.5px] md:ml-4 px-2 border-[#FF4D0A] h-[50px] rounded-[25px] w-[160px]  font-saeada-regular">
        
                            Become A Partner
                        </button>
                    </Link>
                </div>
            </div>
            <img className=" mb-[60px]" src={shape} alt="oval shapes" />
            <Footer />
            
        </div>
    )
}

export default Activities;