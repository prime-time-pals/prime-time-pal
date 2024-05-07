
import whitePattern from "../assets/images/white-pattern.png"

function Hero({ heroImg, buttonText }) {
    return (
        <section className="gap-8 md:flex m-8 md:justify-center pt-8 md:h-[500px]">
            <div className="md:w-[500px]">
                <header className="font-saeada-regular text-[#0070ff] leading-12 font-bold text-[30px] md:text-[40px]">Connection Elderly Hearts, One Click at a Time</header>
                <p className="text-[#4f4f4f] mt-4 font-bold tracking-widest font-saeada-thin"><span className="font-saeada-regular font-normal">Prime Time Pals</span> is a vibrant community platform designed to bring elderly individuals together for meaningful connections, engaging activities, and invaluable support.</p>
                 <p className="text-[#4f4f4f] mt-3 font-bold tracking-widest hidden md:block font-saeada-thin">Join in creating lasting friendships, and exploring exciting events. Together, we'll make every moment count!</p>
                <button className="mb-10 relative mt-8 px-2 text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[150px] font-saeada-light">
                    <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                    <p>{buttonText}</p>
                </button>
            </div>
            <div className="md:flex mb-10 items-center justify-center">
                <img  className="object-fit w-[343px] md:w-[500px] h-full md:h-auto" src={heroImg} alt="hero section image" />
            </div>
        </section>
    )
}

export default Hero;