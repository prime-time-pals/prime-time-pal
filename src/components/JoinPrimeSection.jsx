import sectionImg from '../assets/images/side-image.svg';
import whitePattern from "../assets/images/pattern-svg.svg";
import burstBloat from "../assets/images/Burst-Bloat.svg";
import topology from "../assets/images/Topology-1.svg";

function JoinPrimeSection() {
    return (
        <div className="relative px:8 md:px-16 py-24 bg-black ">
            <img className='absolute w-10 right-14 top-10 md:right-16 md:top-16' src={burstBloat} alt="" />
            <img className='absolute w-24 left-6 bottom-16' src={topology} alt="" />
            <h2 className='font-saeada-regular font-bold text-center mb-12 text-[28px] md:text-[34px] text-[#0070FF]'>Why Join Prime Time Pals?</h2>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mr-6">
                    {/* first row */}
                    <div className="mx-8 md:flex justify-center gap-8">
                        <span className='text-[24px] font-saeada-regular  text-[#1EA3FF]'>01</span>
                        <div className='text-[#F6F6F6]'>
                            <h3 className="text-[26px] font-saeada-light mb-6">Forge Meaningful Connections</h3>
                            <p className='mb-7 font-saeada-thin tracking-widest text-[14px] md:text-[16px] text-[#D1D1D1]'>
                                Joining the Prime Time Pals community offers the opportunity to forge meaningful connections with like-minded individuals who share similar interests, experiences, and values. Through engaging discussions, group activities, and events, 
                                members can build lasting friendships and support networks that enrich their lives.
                            </p>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="mx-8 md:flex justify-center gap-8">
                        <span className='text-[24px] font-saeada-regular  text-[#1EA3FF]'>02</span>
                        <div className='text-[#F6F6F6]'>
                            <h3 className="text-[26px] font-saeada-light mb-6">Access Valuable Resources & Activities</h3>
                            <p className='mb-7 font-saeada-thin tracking-widest text-[14px] md:text-[16px] text-[#D1D1D1]'>
                                Prime Time Pals provides access to a wealth of valuable resources, including articles, guides, and expert advice on topics related to health, wellness, and aging gracefully. Whether seeking information on nutrition, fitness, or mental well-being, members can find valuable insights 
                                and support to help them navigate the challenges of aging with confidence and resilience.
                            </p>
                        </div>
                    </div>
                    {/* Third row */}
                    <div className="mx-8 md:flex justify-center gap-8">
                        <span className='text-[24px] font-saeada-regular text-[#1EA3FF]'>03</span>
                        <div className='text-[#F6F6F6]'>
                            <h3 className="text-[26px] font-saeada-light mb-6">Experience a Sense of Belonging</h3>
                            <p className='mb-7 font-saeada-thin tracking-widest text-[14px] md:text-[16px] text-[#D1D1D1]'>
                                By joining Prime Time Pals, members become part of a vibrant and inclusive community where they are valued, heard, and appreciated. The platform fosters a sense of belonging and camaraderie, offering a supportive environment 
                                where members can share stories, seek advice, and celebrate life's moments together.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2"><img className="hidden md:block object-cover w-full h-full" src={sectionImg} alt="Older man and woman in a garden" /></div>
            </div>
            <div className='flex justify-center flex-col md:flex-row items-center mt-8'>
                <button className="relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[150px] font-saeada-light">
                    <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                    <p>Join Community</p>
                </button>
                <button className="relative text-[#FF4D0A] border-[1.5px] mt-5 md:mt-0 md:ml-4 px-2 border-[#FF4D0A] h-[50px] rounded-[25px] w-[160px] font-saeada-regular">
                    Become A Partner
                </button>
            </div>
        </div>
    )
}

export default JoinPrimeSection;