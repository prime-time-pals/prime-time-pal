import upload from "../../assets/images/upload.svg"
import whitePattern from "../../assets/images/pattern-svg.svg";
import { useState } from "react";

export default function Identification({ handleChange, formError, handleClick, steps, setFormData, currentStep }) {

    const [selectedFileName, setSelectedFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.currentTarget.files[0];
        setFormData(prev => ({ ...prev, 'image': file }));
        setSelectedFileName(file ? file.name : '');
    };
    return (
        <div  id="myForm" className="grid gap-4 grid-cols-1 md:grid-cols-2"> 
            <div className="col-span-full">
                <div className="p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300">
                <label className="font-saeada-extraLight mb-4 font-bold tracking-widest">Please provide a valid Means Of Identification (We need to verify you are who you say you are)</label>
                <div className="relative my-4 overflow-hidden flex justify-center items-center">
                    <button className="p-4 border-2 flex gap-2 flex-col text-[14px] rounded-[20px] justify-center items-center border-[#D1D1D1]"><img src={upload} alt="upload icon" />Upload ID</button>
                    <input className="absolute left-0 top-0 text-[100px] opacity-0" type="file" name="image" onChange={handleFileChange} />
                </div>
                {selectedFileName && (
                    <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFileName}</p>
                )}
                </div>
                {formError.image && <span id="hobbiesError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs">{formError.image}</span>}
            </div>
            <div className="col-span-full">
                <div className="p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300">
                    <label className="font-saeada-extraLight mb-4 font-bold tracking-widest">Is there anything else you’d like us to know?</label>
                    <label className="mb-4 flex font-bold tracking-widest font-saeada-extraLight">
                        <input type="text" name="additional" className="border-b-2 w-full border-black outline-none" onChange={handleChange} /> 
                    </label>
                </div>
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