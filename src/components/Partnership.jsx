import oldWorker from "../assets/images/oldWorkers.svg"

function Partnership() {
    return (
        <div className="mx-8 mb-10 flex  items-center justify-center">
            <div className="flex gap-8 flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img className="object-cover w-full h-full" src={oldWorker} alt="image of old people" />
                </div>
                <div className="md:mt-12 md:flex md:flex-col justify-center mt-4 md:w-1/2">
                    <h2 className="text-[#0070FF] text-[22px] font-bold mb-4 md:text-[30px] font-saeada-regular">Partnership Opportunities</h2>
                    <div>
                        <p className="text-[#4f4f4f] tracking-widest font-bold mb-4 font-saeada-thin">
                            We offer a range of partnership opportunities tailored to meet your organization's 
                            goals, objectives, and budget. Whether you're interested in sponsoring events, 
                            providing in-kind support, or collaborating on joint initiatives, 
                            we're committed to working with you to create a customized partnership package that meets your needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partnership;