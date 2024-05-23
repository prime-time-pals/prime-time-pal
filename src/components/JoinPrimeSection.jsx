import sectionImg from '../assets/images/side-image.svg';
import whitePattern from "../assets/images/pattern-svg.svg";
import burstBloat from "../assets/images/Burst-Bloat.svg";
import topology from "../assets/images/Topology-1.svg";
import { Link } from 'react-router-dom';

function JoinPrimeSection() {
    return (
        <div className="relative px:8 md:px-16 py-24 bg-black ">
            <img className='absolute w-10 right-14 top-10 md:right-16 md:top-16' src={burstBloat} alt="" />
            <img className='absolute w-24 left-6 bottom-16' src={topology} alt="" />
            <h2 className='font-saeada-regular font-bold text-center px-8 mb-12 text-[28px] md:text-[34px] text-[#0070FF]'>Why Join Prime Time Pal?</h2>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mr-6">
                    {/* first row */}
                    <div className="mx-8 md:flex justify-center gap-8">
                        <span className='text-[24px] font-saeada-regular  text-[#1EA3FF]'>01</span>
                        <div className='text-[#F6F6F6]'>
                            <h3 className="text-[26px] font-saeada-light mb-6">Diverse Events and Activities</h3>
                            <p className='mb-7 font-saeada-thin tracking-widest text-[14px] md:text-[16px] text-[#D1D1D1]'>
                            At Prime Time Pal, we believe that life should be filled with fun and excitement.
                            That's why we organize a wide range of events and activities tailored to your interests
                            and preferences. From cooking classes and art workshops to outdoor adventures and
                            social gatherings, there's always something new and exciting to explore.

                            </p>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="mx-8 md:flex justify-center gap-8">
                        <span className='text-[24px] font-saeada-regular  text-[#1EA3FF]'>02</span>
                        <div className='text-[#F6F6F6]'>
                            <h3 className="text-[26px] font-saeada-light mb-6">Social Connections</h3>
                            <p className='mb-7 font-saeada-thin tracking-widest text-[14px] md:text-[16px] text-[#D1D1D1]'>
                            We understand the importance of relationships and connections in enriching our
                            lives. Prime Time Pal provides a welcoming environment where you can meet
                            like-minded individuals, share experiences, and forge lasting friendships. Whether you're
                            looking for a workout buddy, a travel companion, or simply someone to chat with, you'll
                            find it here.

                            </p>
                        </div>
                    </div>
                    {/* Third row */}
                    <div className="mx-8 md:flex justify-center gap-8">
                        <span className='text-[24px] font-saeada-regular text-[#1EA3FF]'>03</span>
                        <div className='text-[#F6F6F6]'>
                            <h3 className="text-[26px] font-saeada-light mb-6">Supportive Community</h3>
                            <p className='mb-7 font-saeada-thin tracking-widest text-[14px] md:text-[16px] text-[#D1D1D1]'>
                            Our community is built on inclusivity, empathy, and support. Whether you're
                            navigating the challenges of aging, seeking advice, or simply looking for a listening ear,
                            you'll find a supportive network of members ready to lend a helping hand and offer
                            encouragement.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2"><img className="hidden md:block object-cover w-full h-full" src={sectionImg} alt="Older man and woman in a garden" /></div>
            </div>
            <div className='flex justify-center flex-col md:flex-row items-center mt-8'>
                <Link to="/prime-time-pals/registration/">
                    <button className="relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-[150px] font-saeada-light">
                        <img src={whitePattern} alt="backgroundImg" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                        <p>Join Community</p>
                    </button>
                </Link>
                <Link to="/prime-time-pals/partner/">
                    <button className="relative text-[#FF4D0A] border-[1.5px] mt-5 md:mt-0 md:ml-4 px-2 border-[#FF4D0A] h-[50px] rounded-[25px] w-[160px] font-saeada-regular">
                        Become A Partner
                    </button>
                </Link>
                
            </div>
        </div>
    )
}

export default JoinPrimeSection;