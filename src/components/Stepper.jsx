import { useEffect, useState, useRef } from "react"

const Stepper = ({steps, currentStep}) => {

    const [newStep, setNewStep] = useState([])
    const stepRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps]
        let count = 0;

        while(count < newSteps.length) {
            if(count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true
                };
                count++;
            } else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    selected: false,
                    completed: true,
                    highlighted: true,
                };
                count++;
            }

            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                }
                count++;
            }
        }

        return newSteps;
    };

    useEffect(() => {
        const stepsState = steps.map((step, index) => 
            Object.assign(
                {},
                {
                    description: step,
                    completed: false,
                    highlighted: index === 0 ? true : false,
                    selected: index === 0 ? true : false,
                }
            )
        )

        stepRef.current = stepsState;

        const current = updateStep(currentStep - 1, stepRef.current);
        setNewStep(current);

    }, [steps, currentStep]);

    const displaySteps = newStep.map((step, index) => {
        return (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <div className={`min-w-[100px] sm:min-w-[170px] md:min-w-[170px] border-t-2 transition duration-500 ease-in-out ${
                            step.description === 'Personal' && step.completed ? "border-[#0070ff]" :
                            step.description === 'Choices' && step.highlighted ? "border-[#FF3301]" : "border-gray-300"
                            // step.description === 'Identification' && step.highlighted ? "border-[#A92473]" : "border-gray-300" 
                            }`}>
                        </div>
                        <div className={`rounded-full transition duration-500 ease-in-out border-2
                                       h-4 w-4 flex items-center justify-center 
                                     ${
                                        step.description === 'Personal' && step.highlighted ? "bg-[#0070ff] border-[#0070ff]" :
                                        step.description === 'Choices' && step.highlighted ? "bg-[#FF3301] border-[#FF3301]" : ""
                                        // step.description === 'Identification' && step.highlighted ? "bg-[#A92473] border-[#A92473]" : ""
                                     }`}
                                     >
                             {step.completed ? (
                                <span className="text-black font-bold text-xl"></span>
                            ):(
                                ''
                            )}
                        </div>
                    </div>
                    <div>
                        <div className={` font-saeada-light md:text-[20px] text-center mt-4 md:w-32 
                            text-xs font-medium  
                            ${
                                step.description === 'Personal' && step.highlighted ? "text-[#0070ff]" :
                                step.description === 'Choices' && step.highlighted ? "text-[#FF3301]" : "text-[#B0B0B0]"
                                // step.description === 'Identification' && step.highlighted ? "text-[#A92473]" : "text-[#B0B0B0]"

                            }`}>
                                {step.description}
                        </div>
                    </div>
                </div>
              </div>
               
            )
        
    })

    return <div className="w-full flex justify-center items-center">
       { displaySteps }
    </div>
};

export default Stepper;

  // <div key={index} 
                //     className={index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"} >
                
                //     <div className={`absolute top-0 text-center mt-16 w-32 
                //         text-xs font-medium uppercase ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>
                //             {step.description}
                //         </div>
                //      <div className="relative flex flex-col items-center text-teal-600">
                //      <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                //             step.completed ? "border-green-600" : "border-gray-300"
                //             }`}>
                //     </div>
                //         <div className={`rounded-full transition duration-500 ease-in-out border-2
                //                      border-gray-300 h-4 w-4 flex items-center justify-center 
                //                      ${step.selected 
                //                         ? "bg-green-600 text-white font-bold border border-green-600"
                //                         : ""
                //                     }`}
                //                     >
                //             {step.completed ? (
                //                 <span className="text-white font-bold text-xl"></span>
                //             ):(
                //                 ''
                //             )}
                //         </div>
                //         <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                //             step.completed ? "border-green-600" : "border-gray-300"
                //             }`}>
                //     </div>
                //     </div>
                    
                    
                // </div>