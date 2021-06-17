import './stylesheets/enviclean.css'
import HeroComponent from "./HeroComponent";
import AboutUs from "./AboutUs";
import WhyComponent from "./WhyComponent";
import Footer from "../Footer/Footer";

function DepositorLandingPage() {

    return(
        <section>
            <HeroComponent/>
            <WhyComponent />
            <AboutUs />
            <Footer />
        </section>
    );
}

export default DepositorLandingPage;