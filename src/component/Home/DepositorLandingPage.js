import '../../stylesheets/enviclean.css'
import NavBarComponent from "./navbar/NavBarComponent";
import HeroComponent from "./HeroComponent";
import AboutUs from "./AboutUs";
import WhyComponent from "./WhyComponent";

function DepositorLandingPage() {

    return(
        <section>
            <HeroComponent/>
            <WhyComponent />
            <AboutUs />
        </section>
    );
}

export default DepositorLandingPage;