import footerLogo from "../assets/images/footerLogo.svg";
import whitePattern from "../assets/images/white-pattern.png"
import socialLinks from "../assets/images/Social Media Links.svg"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="mx-10">
            <div className="md:flex md:gap-10">
                <div className="md:flex-1">
                    <Link to="/prime-time-pals/">
                        <img src={footerLogo} alt="" />
                    </Link>
                    <p className="font-saeada-regular trackw text-[16px] my-8 text-[#6d6d6d]">
                        Founded with a vision to combat loneliness and isolation among the elderly, 
                        our platform strives to create a welcoming space where members can share experiences, 
                        interests, and laughter.
                    </p>
                    <Link to="/prime-time-pals/registration/">
                        <button className="relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[150px] font-saeada-light">
                            <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                            <p>Join Community</p>
                        </button>
                    </Link>
                </div>
                <div className="md:flex-1 my-8 md:mt-0 md:flex md:flex-col justify-center tracking-widest">
                    <ul className="self-center">
                    <h3 className="my-2 font-saeada-regular tracking-widest text-[20px] text-[#FF4D0A]">Quick Links</h3>
                        <li className="my-4"><Link className="font-saeada-regular text-[16px] text-[#5D5D5D]" to="/prime-time-pals/">Home</Link></li>
                        <li className="my-4"><Link className="font-saeada-regular text-[16px] text-[#5D5D5D]" to="/prime-time-pals/about-us">About Us</Link></li>
                        <li className="my-4"><Link className="font-saeada-regular text-[16px] text-[#5D5D5D]" to="/prime-time-pals/activities">Activities</Link></li>
                        <li className="my-4"><Link className="font-saeada-regular text-[16px] text-[#5D5D5D]" to="/prime-time-pals/partner">Partner With Us</Link></li>
                        <li className="my-4"><Link className="font-saeada-regular text-[16px] text-[#5D5D5D]" to="/prime-time-pals/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="md:flex-1 my-8 md:mt-0 font-saeada-regular md:flex md:flex-col text-[16px] text-[#5D5D5D] tracking-widest">
                    <h3 className="text-[20px] my-2  tracking-widest text-[#FF4D0A]">Contact Details</h3>
                    <p className="my-4">primetimepal@gmail.com</p>
                    <div className="my-4 md:mt-24 justify-end">
                        <img  src={socialLinks} alt="" />
                    </div>
                </div>
            </div>
            <hr className="border-[#6d6d6d] my-10 md:mt-0" />
            <div className="text-[16px] mb-16 md:mx-8 font-saeada-light tracking-widest text-[#0070FF] my-4 md:flex md:justify-between items-center">
                <p className="my-4">Privacy Policy</p>
                <p className="my-4">Terms of Service</p>
                <p className="text-[#FF4D0A]">Copyright@PrimeTimePals{new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer;