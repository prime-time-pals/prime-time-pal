import { useEffect, useState } from "react";
import whitePattern from "../assets/images/pattern-svg.svg"
import missionImgL from "../assets/images/missionImgL.svg"
import missionImgS from "../assets/images/missionImgS.svg"
import burstBloat from "../assets/images/Burst-Bloat.svg";

function Mission() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Change 768 to your breakpoint
        };
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const aboutImg = isMobile ? missionImgS : missionImgL;
    return (
        <div className="md:mr-10 md:mb-[100px] overflow-hidden md:ml-0 mb-10 mt-16 flex items-center justify-center">
            <div className="flex  flex-col md:gap-16 justify-between md:flex-row">
                <div className="relative flex justify-center pt-20 items-center bg-black w-full h-[300px] md:h-[450px] lg:h-[500px] md:pl-20 lg:w-[400px] md:w-[350px]">
                    <img className='md:absolute hidden md:block w-10 right-14 top-10 md:right-16 md:top-4' src={burstBloat} alt="" />
                    <img className="md:absolute max-w-[250px] md:max-w-[300px] lg:max-w-[400px] md:top-[70px]" src={aboutImg} alt="image of old people" />
                </div>
                <div className="mt-20 px-8 text-[14px] md:text-[18px] md:mt-0 lg:self-center md:w-1/2">
                    <h2 className="text-[#0070FF] font-bold mb-4 text-[30px] font-saeada-regular">Our Mission At Prime Time Pals</h2>
                    <div>
                        <p className="text-[#4f4f4f] tracking-widest font-bold mb-4 font-saeada-thin">
                        At Prime Time Pals, our mission is clear: to create a sense of belonging and companionship for elderly individuals who may be seeking meaningful connections and support. We believe that every individual deserves to feel valued, heard, and appreciated, regardless of age or background. Through our platform, we aim to foster a culture of inclusivity, empathy, and joy, where members can share experiences, forge friendships, and make lasting memories together. 
                        </p>
                        
                    </div>
                    <div className="flex justify-center items-center flex-col md:flex-row">
                        <button className="mb-4 md:mb-10 relative md:mt-0 text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[160px] md:w-[150px] font-saeada-light">
                            <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                            <p>Join Community</p>
                        </button>
                        <button className="relative text-[#FF4D0A] border-[1.5px] md:ml-4 px-2 border-[#FF4D0A] h-[50px] rounded-[25px] w-[160px] md:w-[200px] font-saeada-regular">
                            
                            Become A Partner
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;