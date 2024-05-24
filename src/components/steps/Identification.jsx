import upload from "../../assets/images/upload.svg"
import whitePattern from "../../assets/images/pattern-svg.svg";
import { useState } from "react";

export default function Identification({ handleChange, formError, progress, handleClick, steps, setFormData, isDisabled, currentStep }) {
    console.log(progress);
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
                <label className="font-saeada-extraLight mb-4 font-bold tracking-widest">Please provide a valid Means Of Identification (NIN, international passport, Driver’s license)</label>
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
                <button onClick={(e)=>handleClick("next", e)} disabled={isDisabled} className="outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light">
                    <img src={whitePattern} alt="background Image" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                    {
                        
                        progress > 0 && progress < 100 ? 
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div> 
                        : progress === 100 ? <p>Submitted</p>
                        : <p>{currentStep === steps.length ? "Submit" : "Next"}</p>
                    }
                </button>
            </div>
        </div>
    )
    
}