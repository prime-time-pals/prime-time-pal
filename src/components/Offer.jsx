function Offer() {
    return (
        <div className="container mx-auto px-8">
            <h2 className="md:text-[36px] text-center font-saeada-regular text-[#0070FF] text-[26px] font-bold mb-4">What We Offer</h2>
            <div className="flex mt-8 md:mt-16 flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                    <div className="bg-white border-[#000000] border-[0.5px] p-6 rounded-lg overflow-hidden">
                        <div className="">
                            <h3 className="text-xl font-semibold text-[#FF4D0A] font-saeada-light text-[22px] md:text-[30px] mb-4">Community Forums</h3>
                            <p className="text-black font-saeada-extraLight tracking-widest">Engage in discussions, share advice, and connect with fellow members in our vibrant community forums. Whether you're interested in hobbies, health tips, or local events, there's something for everyone to explore.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                <div className="bg-white border-[0.5px] border-[#000000] p-6 rounded-lg overflow-hidden">
                    <div className="">
                    <h3 className="text-xl font-semibold text-[#FF4D0A] font-saeada-light text-[22px] md:text-[30px] mb-4">Events and Activities</h3>
                    <p className="text-black font-saeada-extraLight tracking-widest">Discover exciting events, and group activities organized by Prime Time Pals. From book clubs and outings and volunteer opportunities, there's no shortage of ways to stay active and engaged.</p>
                    </div>
                </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                <div className="bg-white border-[0.5px] border-[#000000] p-6 rounded-lg overflow-hidden">
                    <div className="">
                    <h3 className="text-xl font-semibold text-[#FF4D0A] font-saeada-light text-[22px] md:text-[30px] mb-4">Health Resources</h3>
                    <p className="text-black font-saeada-extraLight tracking-widest">Access valuable resources, articles, and guides on topics related to health, wellness, and aging gracefully. Stay informed and empowered as you navigate the journey of aging with confidence and resilience.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}
export default Offer;