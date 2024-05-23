import { useState } from "react"
// import { StepperContext } from "../contexts/StepperContext"
import whitePattern from "../../assets/images/pattern-svg.svg";

export default function Personal({ data, handleChange, handleClick, steps, currentStep, formError }) {
    // const { userData, setUserData } = useContext(StepperContext);
    // console.log(userData)
    // const handleChange = (e) => {
    //     const { name, value, checked, type } = e.target;
    //     onDataChange({ ...data, [name]: type === "checkbox" ? (checked ? [...(data[name] || []), value] : data[name].filter(item => item !== value)) : value });
        // setUserData(prevState => {
        //     if (type === 'checkbox') {
        //         // For checkboxes, add or remove the value from the array
        //         if (checked) {
        //             return { ...prevState, [name]: [...(prevState[name] || []), value] };
        //         } else {
        //             return { ...prevState, [name]: (prevState[name] || []).filter(item => item !== value) };
        //         }
        //     } else {
        //         // For other input types, set the value directly
        //         return { ...prevState, [name]: value };
        //     }
        // });
    // }
    
    

    return (
        <div  id="myForm" className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="">
                    <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="firstname">First Name<span style={{color: 'red'}}>*</span></label>
                    <div className="p-2 md:p-4 border rounded-md mt-4 border-gray-300">
                        <input id="firstName" type="text" name="firstname" value={data.firstname} placeholder="first name" onChange={handleChange} className="appearance-none w-full h-full outline-none border-none focus:outline-none required" />
                    </div>
                    {formError.firstname && <span id="firstNameError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.firstname}</span>}
                </div>
                <div className="">
                    <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="surname">Surname<span style={{color: 'red'}}>*</span></label>
                    <div className="p-2 md:p-4 border rounded-md mt-4 border-gray-300">
                        <input id="surname" type="text" name="surname" value={data.surname} placeholder="surname" onChange={handleChange} className="appearance-none w-full h-full outline-none border-none focus:outline-none required" />
                    </div>
                        {formError.surname && <span id="surnameError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.surname}</span>}
                </div>
                <div className="col-span-full">
                    <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="age">Age<span style={{color: 'red'}}>*</span></label>
                    <div className="p-2 md:p-4 border rounded-md mt-4 border-gray-300">
                        <input id="age" type="text" name="age" value={data.age} placeholder="Age" onChange={handleChange} className="appearance-none w-full h-full outline-none border-none focus:outline-none required" />
                    </div>
                        {formError.age && <span id="ageError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.age}</span>}
                </div>
                <div className="col-span-full">
                    <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="location">Location (City/State)</label>
                    <div className="p-2 md:p-4 border rounded-md mt-4 border-gray-300">
                        <input id="location" type="text" name="location" value={data.location} placeholder="Location (City/State)" onChange={handleChange} className="bg-transparent appearance-none w-full h-full outline-none border-none focus:outline-none" />
                    </div>
                </div>
                <div className="col-span-full">
                    <div className="p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300">
                    <label className="font-saeada-extraLight mb-4 font-bold tracking-widest" htmlFor="gender">Gender<span style={{color: 'red'}}>*</span></label>
                        <label className="radio-label mb-4">
                            <input type="radio" name="gender" value="male" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Male</span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="gender" value="female" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Female</span>
                        </label>
                    </div>
                    {formError.gender && <span id="genderError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.gender}</span>}
                </div>
                <div className="col-span-full">
                    <div className="p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300">
                    <label className="font-saeada-extraLight mb-4 font-bold tracking-widest">How did you hear about Prime Time Pal? If other, (Please specify).<span style={{color: 'red'}}>*</span></label>
                        <label className="radio-label mb-4">
                            <input type="radio" name="hearAbout" value="social media" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Social media (Facebook, Twitter, Instagram, etc.)</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="radio" name="hearAbout" value="word of mouth" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Word of mouth</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="radio" name="hearAbout" value="online search" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Online search</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="radio" name="hearAbout" value="advertisement" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Advertisement</span>
                        </label>
                        <label className="mb-4 flex font-bold tracking-widest font-saeada-extraLight"> Other:
                            <input type="text" name="hearAbout" className="ml-4 border-b-2 w-full border-black outline-none" onChange={handleChange} /> 
                        </label>
                    </div>
                    {formError.hearAbout && <span id="hearAboutError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.hearAbout}</span>}
                </div>
                <div className="col-span-full">
                    <div className="p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300">
                    <label className="font-saeada-extraLight mb-4 font-bold tracking-widest">Why do you want to join Prime Time Pal? (Choose all that applies)<span style={{color: 'red'}}>*</span></label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="reasons" value="friendship" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Looking for friendship/companionship</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="reasons" value="hangout" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Looking for people to hangout with/party with</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="reasons" value="hobbies" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Looking for people to share hobbies with</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="reasons" value="spendTime" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Looking to kill time once in a while</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="reasons" value="partner" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Looking for a partner</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="reasons" value="travelCompanion" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Looking for travel buddies</span>
                        </label>
                    </div>
                    {formError.reasons && <span id="reasonsError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.reasons}</span>}
                </div>
                <div className="col-span-full">
                    <button onClick={(e)=>handleClick("next", e)} className="outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light">
                        <img src={whitePattern} alt="background Image" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                        <p>{currentStep === steps.length ? "Submit" : "Next"}</p>
                    </button>
                </div>
            </div>
    )
}