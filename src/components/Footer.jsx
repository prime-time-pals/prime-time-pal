import footerLogo from "../assets/images/footerLogo.svg";
import whitePattern from "../assets/images/white-pattern.png"
import socialLinks from "../assets/images/Social Media Links.svg"

function Footer() {
    return (
        <div className="mx-10">
            <div className="md:flex md:gap-10">
                <div className="md:flex-1">
                    <img src={footerLogo} alt="" />
                    <p className="font-saeada-light my-8 text-[#6d6d6d] md:text-[14px]">
                        Founded with a vision to combat loneliness and isolation among the elderly, 
                        our platform strives to create a welcoming space where members can share experiences, 
                        interests, and laughter.
                    </p>
                    <button className="relative  text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[150px] font-saeada-light">
                        <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                        <p>Join Community</p>
                    </button>
                </div>
                <div className="md:flex-1 my-8 md:mt-0 md:flex md:flex-col justify-center tracking-widest">
                    <h3 className="my-2 font-saeada-regular self-center tracking-widest text-[20px] text-[#FF4D0A]">Quick Links</h3>
                    <ul className="self-center">
                        <li className="my-4"><a className="font-saeada-regular text-[16px] text-[#5D5D5D]" href="">Home</a></li>
                        <li className="my-4"><a className="font-saeada-regular text-[16px] text-[#5D5D5D]" href="">About Us</a></li>
                        <li className="my-4"><a className="font-saeada-regular text-[16px] text-[#5D5D5D]" href="">Activities</a></li>
                        <li className="my-4"><a className="font-saeada-regular text-[16px] text-[#5D5D5D]" href="">Partner With Us</a></li>
                        <li className="my-4"><a className="font-saeada-regular text-[16px] text-[#5D5D5D]" href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="md:flex-1 my-8 md:mt-0 font-saeada-regular md:flex md:flex-col justify-center text-[16px] text-[#5D5D5D] tracking-widest">
                    <h3 className="text-[20px] my-2  tracking-widest text-[#FF4D0A]">Contact Details</h3>
                    <p className="my-4">primetimepalsng@gmail.com</p>
                    <div className="my-4">
                        <img className="self-end" src={socialLinks} alt="" />
                    </div>
                </div>
            </div>
            <hr className="border-[#6d6d6d] my-10 md:mt-0" />
            <div className="text-[16px] mb-16  font-saeada-light tracking-widest text-[#0070FF] my-4 md:flex md:justify-between items-center">
                <p className="my-4">Privacy Policy</p>
                <p className="my-4">Terms of Service</p>
                <p className="text-[#FF4D0A]">Copyright@PrimeTimePals{new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer;