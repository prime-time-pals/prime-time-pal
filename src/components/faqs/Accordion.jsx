/* eslint-disable react/prop-types */
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

// eslint-disable-next-line react/prop-types
const Accordion = ({ item }) => {

    const [openAccordion, setOpenAccordion] = useState(false)
  
    return (

        <div className={`px-[50px] border-b-2 lg:px-[0px] group ${ openAccordion ? 'is-active' : '' }`}>
        <div onClick={() => setOpenAccordion(!openAccordion)} className="cursor-pointer gap-8 flex items-center justify-between duration-500">
          <h2 className="font-saeada-light text-[#4f4f4f] w-48 sm:w-auto text-[14px] lg:text-[26px] py-2 lg:mr-8 lg:py-4 duration-500">{item.question}</h2>
          {
            openAccordion ?
            <SlArrowUp className="text-sm lg:text-xl group-[.is-active]:font-bold duration-500" />
            :
            <SlArrowDown className="text-sm lg:text-xl group-[.is-active]:font-bold duration-500" />
          }
        </div>
        {/* <hr className="bg-[#1E143C] h-0.5" /> */}
        <div className = "py-1 overflow-hidden max-h-0 group-[.is-active]:max-h-[250px] duration-500">
          <p className="font-saeada-extraLight text-[13px] text-gray-500 lg:tracking-widest lg:mb-6 lg:text-lg">{item.answer}</p>
        </div>
      </div>
    )
}



export default Accordion;