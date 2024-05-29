
import { Link } from "react-router-dom";
import whitePattern from "../assets/images/white-pattern.png"

function Hero({ heroImg, buttonText, link }) {
    return (
        <section className="gap-8 md:flex m-8 md:justify-center pt-8 md:h-[500px]">
            <div className="md:w-[500px]">
                <header className="font-saeada-regular text-[#0070ff] leading-12 font-bold text-[30px] md:text-[40px]">Connecting Older adults, One activity at a Time</header>
                <p className="text-[#4f4f4f] mt-4 font-bold tracking-widest font-saeada-thin"><span className="font-saeada-regular font-normal">Prime Time Pal</span> is a groundbreaking social community revolutionizing the way older adults
                    experience leisure and socialization. Prime Time Pal is designed to bring older adults together
                    for engaging activities, meaningful connections, and invaluable support. <br /> Join in creating lasting memories and explore exciting activities together. Together, we’ll make
                    every moment count.

                </p>
                <Link to={link}>
                    <button className="mb-10 relative mt-8 px-2 text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[150px] font-saeada-light">
                        <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                        <p>{buttonText}</p>
                    </button>
                </Link>
            </div>
            <div className="md:flex mb-10 items-center justify-center">
                <img  className="object-fit w-[343px] md:w-[500px] h-full md:rounded-[100px] md:h-auto" src={heroImg} alt="hero section image" />
            </div>
        </section>
    )
}

export default Hero;