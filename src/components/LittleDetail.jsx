import whitePattern from "../assets/images/pattern-svg.svg"

function LittleDetail() {
    return (
        <div className="relative md:flex md:flex-col md:justify-center p-6 md:items-center text-white text-center bg-gradient-to-r from-[#0070FF] to-[#0070FF] md:h-[136px] w-full font-saeada-thin">
            <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
            <h3 className="font-saeada-regular text-[24px] md:text-[34px]">Prime Time Pal</h3>
            <p className="font-saeada-light tracking-widest text-[16px] md:text-[18px]">Fostering social connections among older adults through diverse events and a
                vibrant online community.
            </p>
        </div>
        
    )
}

export default LittleDetail;