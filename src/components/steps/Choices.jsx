// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import whitePattern from "../../assets/images/pattern-svg.svg";

export default function Choices({ handleChange, handleClick, steps, currentStep, formError }) {
    return (
        <div  id="myForm" className="grid gap-4 grid-cols-1 md:grid-cols-2"> 
                <div className="col-span-full">
                    <div className="p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300">
                    <label className="font-saeada-extraLight mb-4 font-bold tracking-widest">Do you have any specific hobbies or activities you'd like to participate in within the community? (Choose all that applies). If other, please specify<span style={{color: 'red'}}>*</span></label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="hobbies" value="arts and crafts" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Arts and crafts</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="hobbies" value="cooking or baking" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Cooking or baking</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="hobbies" value="gardening" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Gardening</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="hobbies" value="fitness or exercise" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Fitness or exercise</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="hobbies" value="dancing" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Dancing</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="hobbies" value="games" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Games (board games, card games, etc)</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="hobbies" value="outdoor activities" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Outdoor activities (hiking, walking, etc)</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="hobbies" value="traveling" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Traveling</span>
                        </label>
                        <label className="mb-4 flex font-bold tracking-widest font-saeada-extraLight"> Other:
                            <input type="text" name="hobbies" className="ml-4 border-b-2 w-full border-black outline-none" onChange={handleChange} /> 
                        </label>
                    </div>
                    {formError.hobbies && <span id="hobbiesError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.hobbies}</span>}
                </div>
                <div className="col-span-full">
                    <div className="p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300">
                    <label className="font-saeada-extraLight mb-4 font-bold tracking-widest">Are there any particular topics or themes you'd like to see discussed or explored within the community? (Check all that apply). If other, please specify.<span style={{color: 'red'}}>*</span></label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="topics" value="health and wellness" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Health and wellness</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="topics" value="travel experiences" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Travel experiences</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="topics" value="cultural events" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Cultural events</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="topics" value="family and relationships" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Family and relationships</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="topics" value="personal development" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Personal development</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="topics" value="current affairs and news" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Current affairs and news</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="topics" value="entertainment" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Entertainment (movies, TV shows, etc.)</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="checkbox" name="topics" value="education and learning" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Education and learning</span>
                        </label>
                        <label className="mb-4 flex font-bold tracking-widest font-saeada-extraLight"> Other:
                            <input type="text" name="topics" className="ml-4 border-b-2 w-full border-black outline-none" onChange={handleChange} /> 
                        </label>
                    </div>
                    {formError.topics && <span id="topicsError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.topics}</span>}
                </div>
                <div className="col-span-full">
                    <div className="p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300">
                    <label className="font-saeada-extraLight mb-4 font-bold tracking-widest" htmlFor="involvement">Have you ever participated in a social or community group before?<span style={{color: 'red'}}>*</span></label>
                        <label className="radio-label mb-4">
                            <input type="radio" name="involvement" value="yes" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Yes</span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="involvement" value="no" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">No</span>
                        </label>
                    </div>
                    {formError.involvement && <span id="involvementError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.involvement}</span>}
                </div>
                <div className="col-span-full">
                    <div className="p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300">
                    <label className="font-saeada-extraLight mb-4 font-bold tracking-widest" htmlFor="accessibility">Do you have any accessibility needs or preferences we should be aware of?</label>
                        <label className="radio-label mb-4">
                            <input type="radio" name="accessibility" value="yes" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Yes</span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="accessibility" value="no" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">No</span>
                        </label>
                    </div>
                    {formError.accessibility && <span id="reasonsError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.accessibility}</span>}
                </div>
                <div className="col-span-full">
                    <div className="p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300">
                    <label className="font-saeada-extraLight mb-4 font-bold tracking-widest" htmlFor="volunteering">Would you be interested in volunteering to help organize or facilitate group activities?<span style={{color: 'red'}}>*</span></label>
                        <label className="radio-label mb-4">
                            <input type="radio" name="volunteering" value="yes" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Yes</span>
                        </label>
                        <label className="radio-label mb-4">
                            <input type="radio" name="volunteering" value="no" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">No</span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="volunteering" value="maybe" onChange={handleChange} /> <span className="text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight">Maybe</span>
                        </label>
                    </div>
                    {formError.volunteering && <span id="volunteeringError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.volunteering}</span>}
                </div>
                <div className="col-span-full">
                    <button onClick={(e)=>handleClick("next", e)} className="outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light">
                        <img src={whitePattern} alt="background Image" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                        <p>{currentStep === steps.length ? "Submit" : "Next"}</p>
                    </button>
                </div>
            </div>
//         <div className="h-screen bg-black flex flex-col justify-center items-center">
//     {[...Array(5)].map((_, index) => (
//         <label key={index} htmlFor={`check-box-${index}`} className="cursor-pointer relative">
//             <input type="checkbox" id={`check-box-${index}`} className="appearance-none h-32 w-32 border-2 rounded-3xl border-[#888888]" />
//             <FontAwesomeIcon className="absolute left-0 top-0 text-opacity-0 check-1 transition text-8xl h-32 w-32 text-[#888888]" icon={faCheck} />
//         </label>
//     ))}
// </div>
    )
}