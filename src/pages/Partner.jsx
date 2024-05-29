import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import shape from "../assets/images/shape-sbg.svg"
import LittleDetail from "../components/LittleDetail";
import PartnerWithUs from "../components/PartnerWithUs";
import Footer from "../components/Footer";
import heroImg from "../assets/images/grown-men.svg";
import WhyPartner from "../components/WhyPartner";
import Partnership from "../components/Partnership";


function Partner() {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero heroImg={heroImg} buttonText='Become A Partner' link="/prime-time-pal/contact/" />
            <img className="hidden md:block" src={shape} alt="oval shapes" />
            <LittleDetail />
            <WhyPartner />
            <img className="hidden md:block md:ml-auto" src={shape} alt="oval shapes" />
            <Partnership />
            <PartnerWithUs />
            <Footer />
            
        </div>
    )
}

export default Partner;