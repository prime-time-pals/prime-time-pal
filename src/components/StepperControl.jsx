import { Link } from "react-router-dom";
import backIcon from "../assets/images/Icon.svg";
import whitePattern from "../assets/images/pattern-svg.svg";

const StepperControl = ({handleClick, steps, currentStep}) => {
    
    return (
        <div className="container flex justify-around mt-b mb-8">

            {
                currentStep === 1 ?
                <Link to='/'>
                    <button className='absolute top-12 left-4 md:left-12 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer opacity-100'>
                        <img src={backIcon} alt="back icon" />
                    </button>
                </Link>
                :
                <button onClick={(e)=>handleClick("prev", e)} className='absolute top-12 left-4 md:left-12 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer opacity-100'>
                    <img src={backIcon} alt="back icon" />
                </button>
            }
            {/* <button onClick={()=>handleClick("next")} className="outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light">
                <img src={whitePattern} alt="background Image" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                <p>{currentStep === steps.length ? "Submit" : "Next"}</p>
            </button> */}

        </div>
    )
};

export default StepperControl;