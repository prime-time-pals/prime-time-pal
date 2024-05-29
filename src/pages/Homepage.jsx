import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import shape from "../assets/images/shape-sbg.svg"
import LittleDetail from "../components/LittleDetail";
import AboutSection from "../components/AboutSection";
import JoinPrimeSection from "../components/JoinPrimeSection";
import Faqs from "../components/faqs/Faqs";
import PartnerWithUs from "../components/PartnerWithUs";
import Footer from "../components/Footer";
import aboutImgLarge from "../assets/images/smiley-senior.jpg"
import aboutImgSmall from "../assets/images/aboutSmall.svg"
import heroImg from "../assets/images/people-traveling.jpg";

function Homepage() {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero heroImg={heroImg} buttonText='Join Community' link="/prime-time-pal/registration/"/>
            <img className="hidden md:block" src={shape} alt="oval shapes" />
            <LittleDetail />
            <AboutSection  largeImage = {aboutImgLarge} smallImage = {aboutImgSmall} />
            <img className="hidden md:block md:ml-auto" src={shape} alt="oval shapes" />
            <JoinPrimeSection />
            <Faqs />
            <PartnerWithUs />
            <Footer />
            
        </div>
    )
}

export default Homepage;