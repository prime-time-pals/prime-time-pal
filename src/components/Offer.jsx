function Offer() {
    return (
        <div className="container mx-auto px-8">
            <h2 className="md:text-[36px] text-center font-saeada-regular text-[#0070FF] text-[26px] font-bold mb-4">What We Offer</h2>
            <div className="flex mt-8 md:mt-16 flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                    <div className="bg-white shadow-md md:shadow-xl border-[#d6d6d6] border-[0.5px] p-6 rounded-[20px] overflow-hidden">
                        <div className="">
                            <h3 className="text-xl font-semibold text-[#FF4D0A] font-saeada-light text-[22px] md:text-[30px] mb-4">Events and Activities</h3>
                            <p className="text-black font-saeada-extraLight tracking-widest">Discover exciting events, and group activities organized by Prime Time Pals. From
                            book clubs and outings and volunteer opportunities, there's no shortage of ways to stay
                            active and engaged.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                <div className="bg-white shadow-md md:shadow-xl border-[0.5px] border-[#d6d6d6] p-6 rounded-[20px] overflow-hidden">
                    <div className="">
                    <h3 className="text-xl font-semibold text-[#FF4D0A] font-saeada-light text-[22px] md:text-[30px] mb-4">Specialized Interest Groups</h3>
                    <p className="text-black font-saeada-extraLight tracking-widest">Whether it’s gardening, fitness, book clubs, there’s a group for everyone. We
                    provide a space for members to engage deeply with their passions and meet like-minded
                    individuals.
                    </p>
                    </div>
                </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                <div className="bg-white shadow-md md:shadow-xl border-[0.5px] border-[#d6d6d6] p-6 rounded-[20px] overflow-hidden">
                    <div className="">
                    <h3 className="text-xl font-semibold text-[#FF4D0A] font-saeada-light text-[22px] md:text-[30px] mb-4">Health and Wellness Resources</h3>
                    <p className="text-black font-saeada-extraLight tracking-widest"> We provide valuable resources. From expert tips and articles to virtual workshops,
                    our members would have access to information that help them lead healthier and more fulfilling lives.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}
export default Offer;