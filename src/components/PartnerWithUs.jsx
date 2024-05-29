import whitePattern from "../assets/images/pattern-svg.svg";
import partnerImage from "../assets/images/wife-husband.jpg";
import { Link } from "react-router-dom";

function PartnerWithUs() {
    return (
        <div className="relative my-[100px] m-10 rounded-xl text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-auto font-saeada-thin flex flex-col lg:flex-row">
            <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay" />
            <img className="rounded-t-lg md:rounded-t-none object-cover z-20 md:rounded-tl-xl md:rounded-bl-xl w-full lg:w-[560px]" src={partnerImage} alt="Photo of old folks holding hands" />
            <div className="m-4 md:pl-[60px] z-10 md:mr-10 tracking-wide">
                <h2 className="my-6 font-saeada-regular text-[26px] md:text-[34px] font-bold">Partner with Prime Time Pal</h2>
                <p className="font-saeada-light text-[14px] md:text-[18px] mb-6 text-[#f6f6f6] tracking-widest">
                Are you passionate about older adults and fostering a sense of community? Join us
                in our mission to enrich their lives by becoming a partner. Together, let's organize diverse
                events tailored for them, share valuable resources, and make a positive difference in our
                community. 
                </p>
                <Link to="/prime-time-pal/contact/">
                    <button className="relative text-[#FF4D0A] bg-[#f6f6f6] mb-6 border-[1.5px] px-2 border-[#FF4D0A] h-[60px] md:h-[70px] rounded-[35px] w-[160px] md:w-[250px] font-saeada-regular md:text-[24px]">
                        Become A Partner
                    </button>
                </Link>
                
            </div>
        </div>
        
    )
}

export default PartnerWithUs;