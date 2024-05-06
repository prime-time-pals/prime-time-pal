import { useEffect, useState } from "react";
import whitePattern from "../assets/images/pattern-svg.svg"

function AboutSection2({ largeImage, smallImage }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Change 768 to your breakpoint
        };
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const aboutImg = isMobile ? smallImage : largeImage;
    return (
        <div className="mx-8 md:16 mb-10 mt-16 flex  items-center justify-center">
            <div className="flex gap-8 flex-col-reverse md:flex-row">
                <div className="mt-12 md:w-1/2">
                    <h2 className="text-[#0070FF] text-[22px] font-bold mb-4 md:text-[30px] font-saeada-regular">About Prime Time Pals</h2>
                    <div>
                        <p className="text-[#4f4f4f] tracking-widest font-bold mb-4 font-saeada-thin">
                        Prime Time Pals, a platform where age is celebrated, friendships flourish, and lives are enriched. 
                        </p>
                        <p className="text-[#4f4f4f] tracking-widest font-bold mb-4 font-saeada-thin">
                        Prime Time Pals, a platform where age is celebrated, friendships flourish, and lives are enriched. Our story begins with a simple yet powerful vision: to combat loneliness and isolation among elderly individuals by providing a vibrant and supportive community platform where they can connect, engage, and thrive. 
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img className="object-cover w-full h-full" src={aboutImg} alt="image of old people" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection2;