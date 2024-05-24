import { useEffect, useState } from "react";
import whitePattern from "../assets/images/pattern-svg.svg"

function AboutSection2({ largeImage, smallImage }) {
    const [isMobile, setIsMobile] = useState(false);

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
        <div className="mx-8 md:mx-16 mb-10 mt-16 flex  items-center justify-center">
            <div className="flex gap-8 flex-col-reverse md:flex-row">
                <div className="mt-12 md:w-1/2">
                    <h2 className="text-[#0070FF] text-[22px] font-bold mb-4 md:text-[30px] font-saeada-regular">About Prime Time Pal</h2>
                    <div>
                        <p className="text-[#4f4f4f] tracking-widest font-bold mb-4 font-saeada-thin">
                        Prime Time Pal is a social initiative dedicated to combating loneliness and isolation
                        among older adults aged 50 to 70 in Nigeria. Our platform revolutionizes the way older adults
                        experience leisure and socialization by offering a diverse array of engaging activities beyond
                        traditional events.
 
                        </p>
                        <p className="text-[#4f4f4f] tracking-widest font-bold mb-4 font-saeada-thin">
                        Our goal is to empower older adults to make the most of their prime years by providing an
                        inclusive platform where they can discover, participate in, and enjoy a wide range of events and
                        activities tailored to their interests and preferences. 
                        </p>

                        <p className="text-[#4f4f4f] tracking-widest font-bold mb-4 font-saeada-thin">
                        Join Prime Time Pal today and embark on a journey of friendship, fun, and fulfillment!
 
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img className="object-cover w-full h-full" src={largeImage} alt="image of old people" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection2;