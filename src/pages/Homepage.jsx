import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import shape from "../assets/images/shape-sbg.svg"
import LittleDetail from "../components/LittleDetail";
import AboutSection from "../components/AboutSection";
import JoinPrimeSection from "../components/JoinPrimeSection";
import Faqs from "../components/faqs/Faqs";
import PartnerWithUs from "../components/PartnerWithUs";
import Footer from "../components/Footer";


function Homepage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <img className="hidden md:block" src={shape} alt="oval shapes" />
            <LittleDetail />
            <AboutSection />
            <img className="hidden md:block md:ml-auto" src={shape} alt="oval shapes" />
            <JoinPrimeSection />
            <Faqs />
            <PartnerWithUs />
            <Footer />
            
        </div>
    )
}

export default Homepage;