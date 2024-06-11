import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import shape from "../assets/images/shape-sbg.svg"
import LittleDetail from "../components/LittleDetail";
import PartnerWithUs from "../components/PartnerWithUs";
import Footer from "../components/Footer";
import aboutImgLarge from "../assets/images/senior-couple.jpg";
import aboutImgSmall from "../assets/images/aboutAS.svg";
import heroImg from "../assets/images/aboutHeroL.svg";
import AboutSection2 from "../components/AboutSection2";
import Mission from "../components/Mission";
import Offer from "../components/Offer";


function AboutUs() {
    return (
        <div>
            <Navbar />
            <Hero heroImg={heroImg} buttonText='Join Community' link="/registration/" />
            <img className="hidden md:block" src={shape} alt="oval shapes" />
            <LittleDetail />
            <AboutSection2  largeImage = {aboutImgLarge} smallImage = {aboutImgSmall} />
            <img className="hidden md:block md:ml-auto" src={shape} alt="oval shapes" />
            <Mission />
            <Offer />
            <PartnerWithUs />
            <Footer />
            
        </div>
    )
}

export default AboutUs;