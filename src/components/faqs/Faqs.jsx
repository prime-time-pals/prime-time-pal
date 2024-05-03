import data from './data.js'
import Accordion from './Accordion.jsx'

const Faqs = () => {
    
  return (
    <div id="faqs" className=" bg-[#FEFEFE] m-8 md:py-8">
        <div className='md:w-[900px] w-full md:m-auto'>
            <h1 className=" text-[#0070FF] lg:text-center text-center font-bold font-saeada-regular lg:mt-16 lg:mb-10 lg:leading-10 text-[28px] md:text-3xl lg:text-[36px] mb-6">Frequently Asked Questions <br /> About Prime Time Pals</h1>
                {
                data.map((item, i) => (
                <Accordion key={i} item = {item} />
                ))
                }
            
        </div>
    </div>
  )
}

export default Faqs