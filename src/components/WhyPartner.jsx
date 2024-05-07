import whitePattern from "../assets/images/pattern-svg.svg";
import hands from "../assets/images/hands.svg";
import people from "../assets/images/people.svg";

function WhyPartner() {
    return (
        <div className="text-center p-8 md:mt-12">
            <h2 className="text-[28px] md:text-[36px] font-saeada-regular md:font-bold mb-4 md:mb-8 text-[#0684FF] text-center">Why Partner with Prime Time Pals</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="p-4 mb-4 justify-center rounded-[20px] border border-gray-300">
                    <img src={hands} alt="" />
                    <h4 className="text-left font-saeada-regular my-4 text-[#FF3301] text-[22px] md:text-[30px]">Reach A Target <br /> Audience</h4>
                    <p className="text-left font-saeada-light text-[#6D6D6D] text-[18px]">
                        Partnering with Prime Time Pals allows you to connect with a highly targeted 
                        audience of older adults aged 50 to 70, 
                        who are actively seeking social connections and engagement opportunities.
                    </p>
                </div>
                <div className="p-4 mb-4 rounded-[20px] border border-gray-300">
                    <img src={hands} alt="" />
                    <h4 className="text-left font-saeada-regular my-4 text-[#FF3301] text-[22px] md:text-[30px]">Demonstrate Corporate <br /> Social Responsibility</h4>
                    <p className="text-left font-saeada-light text-[#6D6D6D] text-[18px]">
                        By supporting Prime Time Pals, you demonstrate your commitment to social 
                        responsibility and community engagement, 
                        aligning your brand with a worthy cause that resonates with your audience.
                    </p>
                </div>
                <div className="p-4 mb-4 rounded-[20px] border border-gray-300">
                    <img src={people} alt="" />
                    <h4 className="text-left font-saeada-regular my-4 text-[#FF3301] text-[22px] md:text-[30px]">Enhance Brand <br /> Visibility</h4>
                    <p className="text-left font-saeada-light text-[#6D6D6D] text-[18px]">
                        Partnering with Prime Time Pals grants you access to our engaged and active community of members, 
                        volunteers, 
                        and supporters, providing opportunities for collaboration, feedback, and engagement.
                    </p>
                </div>

            </div>
            <button className=" mb-10 relative mt-8 text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[150px] md:w-[150px] font-saeada-light">
                    <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                    <p>Become A Partner</p>
                </button>
        </div>
    )
}

export default WhyPartner;