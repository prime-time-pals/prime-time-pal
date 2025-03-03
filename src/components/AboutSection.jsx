import { useEffect, useState } from "react";
import whitePattern from "../assets/images/pattern-svg.svg"
import { Link } from "react-router-dom";

function AboutSection({ largeImage }) {
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth < 768); // Change 768 to your breakpoint
    //     };
    //     handleResize(); // Initial check
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    // const aboutImg = isMobile ? smallImage : largeImage;
    return (
        <div className="mx-8 md:16 mb-10 mt-16 flex items-center justify-center">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img className="object-cover rounded-[20px] w-full md:h-[576px] md:w-[500px] h-full" src={largeImage} alt="image of old people" />
                </div>
                <div className="mt-8 md:w-1/2">
                    <h2 className="text-[#0070FF] font-bold mb-4 text-[30px] px-2 font-saeada-regular">About Prime Time Pal</h2>
                    <div>
                        <p className="text-[#4f4f4f] px-2 tracking-widest mb-4 font-saeada-light">
                            Prime Time Pal is dedicated to combating loneliness and isolation among older
                            adults by organizing diverse events and activities. Because we understand the
                            importance of connections, we also provide opportunities for socializing and fostering
                            friendships. With a mission centered on inclusivity and empathy, Prime Time Pal
                            provides a welcoming environment where members can share experiences, forge
                            friendships, and make lasting memories.
                        </p>
                        <p className="text-[#4f4f4f] px-2 tracking-widest mb-4 font-saeada-light">
                            Our platform offers a diverse range of events and activities, specialized groups, and
                            resources tailored to enhance the social experience.
                        </p>
                        <p className="text-[#4f4f4f] px-2 tracking-widest mb-4 font-saeada-light">
                            Joining the community is easy and free, connecting older adults aged 50 to 70 in Nigeria
                            to explore new interests and enjoy enriching experiences.
                        </p>
                    </div>
                    <div className="flex">
                        <Link to="/prime-time-pal/about-us">
                            <button className="relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[100px] font-saeada-light">
                                <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                                <p>Read More</p>
                            </button>
                        </Link>
                        <Link to="/prime-time-pal/contact">
                            <button className="relative text-[#FF4D0A] border-[1.5px] ml-4 px-2 border-[#FF4D0A] h-[50px] rounded-[25px] w-[160px] font-saeada-regular">   
                                Become A Partner
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;